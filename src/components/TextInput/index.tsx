import React from 'react';
import { ReactElement } from 'react';
import { TextInput as Input, View, Text } from 'react-native';
import { styles } from './styles';

interface IProps {
  label: string;
  value: string;
  labelColor?: string;
  onChangeText?(text: string): void;
}

const TextInput = ({
  label,
  value,
  labelColor,
  onChangeText,
}: IProps): ReactElement => {
  const style = styles(labelColor);
  return (
    <View style={style.InputContainer}>
      <Text style={style.inputLabel}>
        {label}
      </Text>
      <Input
        value={value}
        onChangeText={onChangeText}
        style={style.input}
      />
    </View>
  )
}

export { TextInput };
