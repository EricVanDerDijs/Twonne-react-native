import React from 'react';
import { Text, View } from 'react-native';
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
  username: string;
  handleSignin(e: NativeSyntheticEvent<NativeTouchEvent>): void;
}

export const SigninLayout = ({
  username,
  handleSignin,
}: IProps): React.ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.twonneIconContainer}>
        <TwonneIcon fontSize={40} />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          textContentType='username'
          label='username'
          value={username}
          labelColor={white}
          style={styles.inputContainer}
          onChangeText={mockHandler}
        />
        <TextInput
          textContentType='password'
          label='password'
          value={username}
          labelColor={white}
          style={styles.inputContainer}
          onChangeText={mockHandler}
          secureTextEntry={true}
        />
        <Button
          text='Signin'
          onPress={handleSignin}
        />
      </View>
    </View>
  );
};
