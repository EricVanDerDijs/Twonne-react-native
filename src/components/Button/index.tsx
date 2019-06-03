import React from 'react';
import { ReactElement } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import { pinkTwonneLight } from '../../assets/colors';
import { styles } from './styles';

interface IProps {
  color?: string;
  underlayColor?: string;
  textColor?: string;
  text: string;
  onPress(e: NativeSyntheticEvent<NativeTouchEvent>): void;
}

const Button = ({
  text,
  onPress,
  color,
  underlayColor = pinkTwonneLight,
  textColor,
}: IProps): ReactElement => {
  const style = styles(color, textColor);
  return (
    <TouchableHighlight
      underlayColor={underlayColor}
      onPress={onPress}
      style={style.container}
    >
      <View>
        <Text
          style={style.text}
        >
          {text}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export { Button };
