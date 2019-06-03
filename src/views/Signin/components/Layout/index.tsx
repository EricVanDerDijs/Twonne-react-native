import React from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import { TwonneIcon } from '../../../../components/TwonneIcon';
import { Button } from '../../../../components/Button';
import { TextInput } from '../../../../components/TextInput';
import { white } from '../../../../assets/colors';
import { styles } from './styles';

const mockHandler = (text: string): void => {
  // tslint:disable-next-line
  console.debug(text);
};

interface IProps {
  initialValues: {
    username: string;
    password: string;
  };
  handleSignin(): void;
}

export const SigninLayout = ({
  initialValues,
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
            style={styles.inputContainer}
            onChangeText={handleChange('username')}
          />
          <TextInput
            textContentType='password'
            label='password'
            value={values.password}
            labelColor={white}
            style={styles.inputContainer}
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
