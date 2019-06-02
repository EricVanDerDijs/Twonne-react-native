import React from 'react';
import { ReactElement } from 'react';
import { TextInput as Input } from 'react-native';
import { styles } from './styles';

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
    style={styles.textInput}
  />

);

export { TextInput };
