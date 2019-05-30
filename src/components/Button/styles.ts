import { StyleSheet } from 'react-native';
import { yellowTwonne, white } from '../../modules/colors';

export const styles = (
  color: string = yellowTwonne,
  textColor: string = white,
) => StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: color,
    height: 50,
  },
  text: {
    color: textColor,
  },
});
