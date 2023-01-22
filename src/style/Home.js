/**
* Home Screen Style
* Created by Emmanuella Albuquerque on 2023/01/20.
*/

// importing libraries
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 200,
    height: 200,
    marginTop: 100
  },

  loading: {
    marginTop: 100, 
    marginBottom: 100 
  },

  base_text: {
    fontFamily: 'Inter_900Black',
    color: '#fff' 
  },

  text: { 
    fontSize: 15, 
    addingHorizontal: 50, 
  },

  title: {
    fontSize: 30, 
    marginTop: 30, 
  },

  subtitle: {
    fontSize: 12, 
  },

  box: {
    backgroundColor: 'white',
    width: '80%',
    height: 50,
    borderRadius: 8,

    backgroundColor: 'rgba( 255, 255, 255, 0.25 )',
    borderStyle: 'solid',
    borderColor: 'rgba( 255, 255, 255, 0.18 )',
    borderWidth: 1
  }
});
