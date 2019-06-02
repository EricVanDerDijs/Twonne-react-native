import React from 'react';
import { Text, View } from 'react-native';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import { TwonneIcon } from '../../../../components/TwonneIcon';
import { Button } from '../../../../components/Button';
import { styles } from './styles';

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
        <Text>{username}</Text>
        <Button
          text='Signin'
          onPress={handleSignin}
        />
      </View>
    </View>
  );
};
