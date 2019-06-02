import React from 'react';
import { TwonneIcon } from './index';
import shallowRenderer from 'react-test-renderer/shallow';

const shallow = shallowRenderer.createRenderer();

function mockHandler(): void {
  // tslint:disable-next-line
  console.debug('test text')
}

it('Renders Twonne Logo', () => {
  shallow.render((
    <TwonneIcon
      fontSize={14}
      onPress={mockHandler}
    />
  ));
});
