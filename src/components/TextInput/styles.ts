import { StyleSheet } from 'react-native';
import { white, textualGray, pinkTwonne } from '../../assets/colors';

export const styles = (
  labelColor: string = textualGray,
  marginBottom: number = 0,
) => StyleSheet.create({
  InputContainer: {
    width: '100%',
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: pinkTwonne,
    borderRadius: 4,
    marginBottom,
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
