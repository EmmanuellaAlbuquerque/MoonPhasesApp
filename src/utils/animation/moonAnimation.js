/**
* Moon animation Loop
* Created by Emmanuella Albuquerque on 2023/01/20.
*/

// importing libraries
import { Animated, Easing } from 'react-native';

export function startMoonAnimation(moonBottom) {

  // Infinite Animation Up-Down
  Animated.loop(
    Animated.sequence([
      Animated.timing(
        moonBottom,
        {
          toValue: 30,
          duration: 1000,
          useNativeDriver: false,
          easing: Easing.ease,
        }
      ),
      Animated.timing(
        moonBottom,
        {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
          easing: Easing.ease,
        }
      )
    ])
    ).start();
}
