/**
* App Screen
* Created by Emmanuella Albuquerque on 2023/01/19.
*/

// importing libraries
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Inter_900Black, Inter_500Medium } from '@expo-google-fonts/inter';

// importing screens 
import Home from './src/screens/Home';

SplashScreen.preventAutoHideAsync();

export default function App() {

  // loading fonts
  const [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_500Medium
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
    <Home onLayout={fontsLoadedCallback} />
  )
}
