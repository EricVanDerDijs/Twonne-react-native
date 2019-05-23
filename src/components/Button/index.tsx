import React from 'react';
import { ReactElement, EventHandler, SyntheticEvent } from 'react';
import { Button as NativeButton } from 'react-native';

interface IProps {
  title: string;
  onPress: EventHandler<SyntheticEvent>;
}

const Button = ({
  title,
  onPress,
}: IProps): ReactElement => {
  return (
    <NativeButton
      title={title}
      onPress={onPress}
    />
  );
};

export { Button };
