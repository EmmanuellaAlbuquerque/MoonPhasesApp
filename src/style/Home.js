/**
* Home Screen Style
* Created by Emmanuella Albuquerque on 2023/01/20.
*/

// importing libraries
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0517',
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
    fontSize: 35, 
    marginTop: 20, 
  },

  subtitle: {
    fontSize: 20,
    fontFamily: 'Inter_100Thin',
    marginBottom: 20
  },
});
