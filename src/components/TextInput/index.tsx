import React from 'react';
import { ReactElement } from 'react';
import { TextInput as Input, View, Text, StyleSheet, ViewStyle } from 'react-native';
import { TextInputProps } from 'react-native';
import { styles } from './styles';

interface IProps extends TextInputProps {
  label: string;
  labelColor?: string;
  containerStyles?: ViewStyle;
}

const TextInput = ({
  label,
  value,
  labelColor,
  onChangeText,
  containerStyles,
}: IProps): ReactElement => {
  const s = styles(labelColor);
  const inputContainerStyles = StyleSheet.flatten([s.InputContainer, containerStyles]);

  return (
    <View style={inputContainerStyles}>
      <Text style={s.inputLabel}>
        {label}
      </Text>
      <Input
        value={value}
        onChangeText={onChangeText}
        style={s.input}
      />
    </View>
  );
};

export { TextInput };
