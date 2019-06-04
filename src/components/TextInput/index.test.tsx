import React from 'react';
import { TextInput } from './index';
import { create } from 'react-test-renderer';

let textValue = '';

const mockHandler = (text: string): void  => {
  textValue = text;
};

it('Renders our custom TesxtInput', () => {
  create((
    <TextInput
      label='user'
      value=''
      onChangeText={mockHandler}
    />
  ));
});

it('Updates TextInput value correctly', () => {
  const tree = create((
    <TextInput
      label='user'
      value=''
      onChangeText={mockHandler}
    />
  ));

  const textInputInstance = tree.root;

  if (textInputInstance
  && textInputInstance.props
  && typeof textInputInstance.props.onChangeText === 'function') {
    textInputInstance.props.onChangeText('test text');
  }

  expect(textValue).toBe('test text');
});
