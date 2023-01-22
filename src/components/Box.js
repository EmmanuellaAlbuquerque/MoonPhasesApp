import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Box ({ title, subtext }) {

  return (
    <TouchableOpacity style={styles.box}>
      <Text style={[styles.box_text_base, styles.box_text_title]}>{title}</Text>
      <Text style={[styles.box_text_base, styles.box_text_subtext]}>{subtext}</Text>
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

    // title
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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