/**
* Box with header Title component
* Created by Emmanuella Albuquerque on 2023/01/23.
*/

// importing libraries
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

export default function BoxTitle (
  { title, aboveTile, belowTile, 
    descriptionAboveTile, descriptionBelowTile }) {

  return (
    <TouchableOpacity style={styles.box}>
    <Text style={[styles.box_text_base, styles.box_text_title, { alignSelf: 'center' }]}>{title}</Text>
    <View style={styles.box_subsection}>
      <Text style={[styles.box_text_base, styles.box_text_title]}>{aboveTile}</Text>
      <Text style={[styles.box_text_base, styles.box_text_subtext]}>{descriptionAboveTile}</Text>
    </View>
    <View style={styles.box_subsection}>
      <Text style={[styles.box_text_base, styles.box_text_title]}>{belowTile}</Text>
      <Text style={[styles.box_text_base, styles.box_text_subtext]}>{descriptionBelowTile}</Text>
    </View>
  </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  box: {
    width: '90%',

    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'rgba( 255, 255, 255, 0.25 )',
    borderStyle: 'solid',
    borderColor: 'rgba( 255, 255, 255, 0.40 )',

    paddingHorizontal: 15,

    // prev
    width: '90%',
    paddingVertical: 15,
    marginTop: 15
  },

  box_hour: {
    height: 70,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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