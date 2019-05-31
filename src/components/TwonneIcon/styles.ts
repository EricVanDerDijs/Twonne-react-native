import { StyleSheet } from 'react-native';
import { white, yellowTwonne } from '../../modules/colors';

export const styles = (
  fontSize: number,
) => StyleSheet.create({
  container: {
    borderRadius: 30,
    backgroundColor: white,
  },
  text: {
    color: yellowTwonne,
    fontFamily: 'ExpletusSans-BoldItalic',
    fontSize,
  },
});
