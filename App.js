/**
* App Screen
* Created by Emmanuella Albuquerque on 2023/01/19.
*/

// importing libraries
import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Inter_900Black, Inter_500Medium, 
  Inter_100Thin, Inter_200ExtraLight, Inter_700Bold, Inter_400Regular
} from '@expo-google-fonts/inter';

// importing screens 
import Home from './src/screens/Home';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {

  // loading fonts
  const [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_100Thin, 
    Inter_700Bold
  });

  // handling with the (font) resource needed to run the APP
  const fontsLoadedCallback = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Home onLayout={fontsLoadedCallback} />
    </View>
  )
}
