import React from 'react';
import { TextInput } from './index';
import renderer from 'react-test-renderer';

let textValue = '';

const mockHandler = (text: string): void  => {
  textValue = text;
};

it('Renders our custom TesxtInput', () => {
  const tree = renderer.create((
    <TextInput
      value=''
      onChangeText={mockHandler}
    />
  )).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Updates TextInput value correctly', () => {
  const tree = renderer.create((
    <TextInput
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
