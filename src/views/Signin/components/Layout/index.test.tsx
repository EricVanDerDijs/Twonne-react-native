import React from 'react';
import { SigninLayout } from './index';
import ShallowRenderer from 'react-test-renderer/shallow';

const shallow = ShallowRenderer.createRenderer();

function mockHandler(): void {
  // tslint:disable-next-line
  console.debug('test text')
}

const initialValues = {
  username: 'eric',
  password: '1234',
}

it('Renders SigninLayout without crashing', () => {
  shallow.render((
    <SigninLayout
      initialValues={initialValues}
      handleSignin={mockHandler}
    />
  ));
});
