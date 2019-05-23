import React from 'react';
import { Button } from './index';
import renderer from 'react-test-renderer';

function mockHandler(): void {
  // tslint:disable-next-line
  console.debug('test text')
}

it('Renders NativeButton with our custom styles', () => {
  const tree = renderer.create((
    <Button
      title='exppected text'
      onPress={mockHandler}
    />
  )).toJSON();
  expect(tree).toMatchSnapshot();
});
