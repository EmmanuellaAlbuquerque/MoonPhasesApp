/**
* Home Screen
* Created by Emmanuella Albuquerque on 2023/01/20.
*/

// importing libraries
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import { BlurView, VibrancyView } from "@react-native-community/blur";
import { Text, View, Animated, ActivityIndicator } from 'react-native';

import { moonCodes } from '../utils/moonCodes';
import { startMoonAnimation } from '../utils/animation/moonAnimation';
import { styles } from '../style/Home';

// importing API instance
import { qweatherAPI } from '../services/api';

// Q WEATHER environment KEY
const { Q_WEATHER_KEY } = process.env;

export default function Home({ onLayout }) {

  const [moonPhaseName, setMoonPhaseName] = useState();
  const [moonPhaseIconCode, setMoonPhaseIconCode] = useState();
  const [moonBottom, setMoonBottom] = useState(new Animated.Value(0));
  const [weatherInfo, setWeatherInfo] = useState({});

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // Executed when component did mount
  useEffect(() => {

    /**
     * Getting geolocation information
     */
    async function getGeolocation() {

      // require permissions for location
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied!');
        return;
      }

      // sets location information
      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude)
      setLongitude(location.coords.longitude);
      setLocation(location.coords);
    }

    getGeolocation();
  }, []);

  // Executed when latitude, longitude change
  useEffect(() => {

    async function getQWeatherAPIInfo() {

      if (!latitude || !longitude) {
        return;
      }

      const URL_Parameters = `/weather/3d?location=${longitude},${latitude}&lang=pt&key=${Q_WEATHER_KEY}`;

      await qweatherAPI.get(URL_Parameters).then(function (response) {

        const daily = response.data.daily[0];
        const weatherData = {
          date: daily.fxDate,
          textDay: daily.textDay,
          textNight: daily.textNight
        }
        
        setWeatherInfo(weatherData);

        setMoonPhaseName(daily.moonPhase);

        setMoonPhaseIconCode(String(daily.moonPhaseIcon));
  
      }).catch(function (error) {
        console.log(error);
      })
    }

    getQWeatherAPIInfo();

  }, [latitude, longitude]);

  startMoonAnimation(moonBottom);

  // handling permission denied for location
  if (errorMsg) {
    return (
      <View style={styles.container} onLayout={onLayout}>
        <Text style={[styles.base_text, styles.text]}>
          {errorMsg}{'\n'}Please grant location permission.
        </Text>
      </View>
    )
  }
  else {
    return (
      <View style={styles.container} onLayout={onLayout}>
        <StatusBar style="auto" />

        { 
          (!moonPhaseIconCode) ?

            // loading
            <ActivityIndicator
              size='large'
              color='#fff'
              style={styles.loading}
            /> 

          :

            // q qeather info
            <>
              {/* <Text style={[styles.base_text, styles.subtitle]}>
                Data: {weatherInfo.date}
              </Text>

              <Text style={[styles.base_text, styles.subtitle]}>
                Previsão do tempo:
              </Text>

              <Text style={[styles.base_text, styles.subtitle]}>
              Dia: {weatherInfo.textDay}, Noite: {weatherInfo.textNight}
              </Text> */}

              <View>
                <Animated.Image source={moonCodes[moonPhaseIconCode]} style={[styles.logo,
                { bottom: moonBottom }]} />
              </View>
              
              <Text style={[styles.base_text, styles.title]}>
                {moonPhaseName}
              </Text>


          </>
      }

      </View>
    );
  }
}
