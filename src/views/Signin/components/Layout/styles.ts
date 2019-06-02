import { StyleSheet } from 'react-native';
import { blueTwonne } from '../../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blueTwonne,
    alignItems: 'center',
  },
  twonneIconContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  formContainer: {
    flex: 6,
    width: '100%',
    padding: 15,
    justifyContent: 'space-between',
  },
});
