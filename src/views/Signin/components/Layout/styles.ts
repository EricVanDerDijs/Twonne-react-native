import { StyleSheet } from 'react-native';
import { blueTwonne } from 'src/assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blueTwonne,
    alignItems: 'center',
  },
  twonneIconContainer: {
    flex: 35,
    justifyContent: 'center',
  },
  formContainer: {
    flex: 65,
    width: '100%',
    padding: 15,
  },
  inputContainer: {
    marginBottom: 20,
  },
});
