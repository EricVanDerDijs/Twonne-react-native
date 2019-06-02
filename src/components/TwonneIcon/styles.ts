import { StyleSheet } from 'react-native';
import { white, pinkTwonne } from '../../assets/colors';

export const styles = (
  fontSize: number,
) => StyleSheet.create({
  container: {
    borderRadius: 30,
    backgroundColor: white,
  },
  text: {
    color: white,
    fontFamily: 'ExpletusSans-BoldItalic',
    fontSize,
    textShadowColor: pinkTwonne,
    textShadowRadius: 1,
    textShadowOffset: { width: -2.3, height: 2.3},
  },
});
