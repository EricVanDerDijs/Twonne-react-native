import React from 'react';
import { ReactElement } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import { styles } from './styles';
import { shadowGray } from '../../assets/colors';

interface IProps {
  fontSize: number;
  onPress?(e: NativeSyntheticEvent<NativeTouchEvent>): void;
}

const TwonneIcon = ({
  fontSize,
  onPress,
}: IProps): ReactElement => {
  const style = styles(fontSize);
  if (onPress) {
    return (
      <TouchableHighlight
        onPress={onPress}
        style={style.container}
        underlayColor={shadowGray}
      >
        <View>
          <Text
            style={style.text}
          >
            Twonne
          </Text>
        </View>
      </TouchableHighlight>
    );
  } else {
    return (
      <Text style={style.text}>Twonne</Text>
    );
  }
};

export { TwonneIcon };
