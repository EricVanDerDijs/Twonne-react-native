import React, { memo } from 'react';
import { ReactElement } from 'react';
import { TextInput as Input, View, Text } from 'react-native';
import { TextInputProps } from 'react-native';
import { styles } from './styles';

interface IProps extends TextInputProps {
  label: string;
  labelColor?: string;
  marginBottom?: number;
}

const TextInput = memo(({
  label,
  value,
  labelColor,
  marginBottom,
  onChangeText,
}: IProps): ReactElement => {
  const s = styles(labelColor, marginBottom);

  return (
    <View style={s.InputContainer}>
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
});

export { TextInput };
