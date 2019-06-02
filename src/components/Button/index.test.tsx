import React from 'react';
import { Button } from './index';
import shallowRenderer from 'react-test-renderer/shallow';

const shallow = shallowRenderer.createRenderer();

function mockHandler(): void {
  // tslint:disable-next-line
  console.debug('test text')
}

it('Renders Button', () => {
  shallow.render((
    <Button
      text='exppected text'
      onPress={mockHandler}
    />
  ));
});
