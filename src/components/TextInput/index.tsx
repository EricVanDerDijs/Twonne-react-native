import React from 'react';
import { ReactElement } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { TextInput as Input } from 'react-native';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import { styles } from './styles';
import { shadowGray } from '../../assets/strings/colors';

interface IProps {
  value: string;
  onChangeText?(text: string): void;
}

const TextInput = ({
  value,
  onChangeText,
}: IProps): ReactElement => (
  <Input
    value={value}
    onChangeText={onChangeText}
    style={style.container}
  />

);

export { TextInput };
