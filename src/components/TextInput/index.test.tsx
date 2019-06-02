import React from 'react';
import { TextInput } from './index';
import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';

const shallow = ShallowRenderer.createRenderer();
let textValue = '';

const mockHandler = (text: string): void  => {
  textValue = text;
};

it('Renders our custom TesxtInput', () => {
  shallow.render((
    <TextInput
      label='user'
      value=''
      onChangeText={mockHandler}
    />
  ));
});

it('Updates TextInput value correctly', () => {
  const tree = renderer.create((
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
