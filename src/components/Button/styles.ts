import { StyleSheet } from 'react-native';
import { pinkTwonne, white } from '../../assets/colors';

export const styles = (
  color: string = pinkTwonne,
  textColor: string = white,
) => StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: color,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: textColor,
  },
});
