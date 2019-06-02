import React from 'react';
import { SigninLayout } from './index';
import renderer from 'react-test-renderer';

function mockHandler(): void {
  // tslint:disable-next-line
  console.debug('test text')
}

it('Renders SigninLayout correctly', () => {
  const tree = renderer.create((
    <SigninLayout
      username='eric'
      handleSignin={mockHandler}
    />
  )).toJSON();
  expect(tree).toMatchSnapshot();
});
