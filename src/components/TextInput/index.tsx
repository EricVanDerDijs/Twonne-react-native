import React from 'react';
import { ReactElement } from 'react';
import { TextInput as Input, View, Text, StyleSheet } from 'react-native';
import { TextInputProps } from 'react-native';
import { styles } from './styles';

interface IProps extends TextInputProps {
  label: string;
  labelColor?: string;
}

const TextInput = ({
  label,
  value,
  labelColor,
  onChangeText,
  style,
  ...props
}: IProps): ReactElement => {
  const s = styles(labelColor);
  const containerStyles = StyleSheet.flatten([s.InputContainer, style]);
  return (
    <View style={containerStyles}>
      <Text style={s.inputLabel}>
        {label}
      </Text>
      <Input
        value={value}
        onChangeText={onChangeText}
        style={s.input}
        {...props}
      />
    </View>
  );
};

export { TextInput };
