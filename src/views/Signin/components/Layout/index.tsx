import React from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';
import { white } from 'src/assets/colors';
import { Button } from 'src/components/Button';
import { TextInput } from 'src/components/TextInput';
import { TwonneIcon } from 'src/components/TwonneIcon';
import { styles } from './styles';

// const mockHandler = (text: string): void => {
//   // tslint:disable-next-line
//   console.debug(text);
// };

const initialValues = {
  username: '',
  password: '',
};

interface IProps {
  handleSignin(): void;
}

export const SigninLayout = ({
  handleSignin,
}: IProps): React.ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.twonneIconContainer}>
        <TwonneIcon fontSize={40} />
      </View>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSignin}
      >
      {({
        values,
        handleChange,
        handleSubmit,
      }) => (
        <View style={styles.formContainer}>
          <TextInput
            textContentType='username'
            label='username'
            value={values.username}
            labelColor={white}
            marginBottom={10}
            onChangeText={handleChange('username')}
          />
          <TextInput
            textContentType='password'
            label='password'
            value={values.password}
            labelColor={white}
            marginBottom={25}
            onChangeText={handleChange('password')}
            secureTextEntry={true}
          />
          <Button
            text='Signin'
            onPress={handleSubmit}
          />
        </View>
      )}
      </Formik>
    </View>
  );
};
