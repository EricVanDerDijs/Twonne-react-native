import { StyleSheet } from 'react-native';
import { white, textualGray, pinkTwonne } from '../../assets/colors';

export const styles = (
  labelColor: string = textualGray,
) => StyleSheet.create({
  InputContainer: {
    width: '100%',
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: pinkTwonne,
    borderRadius: 10,
  },
  inputLabel: {
    fontSize: 16,
    color: labelColor,
  },
  input: {
    fontSize: 20,
    borderRadius: 6,
    color: textualGray,
    backgroundColor: white,
  },
});
