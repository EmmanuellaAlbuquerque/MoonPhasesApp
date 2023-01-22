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

  box: {
    width: '90%',

    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'rgba( 255, 255, 255, 0.25 )',
    borderStyle: 'solid',
    borderColor: 'rgba( 255, 255, 255, 0.40 )',

    paddingHorizontal: 15
  },

  box_hour: {
    height: 70,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  box_prev: {
    width: '90%',
    paddingVertical: 15,
    marginTop: 15
  },

  box_subsection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },

  box_text_base: {
    color: '#fff',
    fontSize: 20,
  },

  box_text_title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 20
  },

  box_text_subtext: {
    fontFamily: 'Inter_400Regular'
  }
});
