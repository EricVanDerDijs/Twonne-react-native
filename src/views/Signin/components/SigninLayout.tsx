import React from 'react';
import { Text, View } from 'react-native';

interface IProps {
  username: string;
}

export const SigninLayout = (): React.ReactElement<IProps> => {
  return (
    <View>
      <Text>Sign in view</Text>
    </View>
  );
};
