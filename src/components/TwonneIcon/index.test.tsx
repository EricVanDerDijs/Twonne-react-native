import React from 'react';
import { TwonneIcon } from './index';
import renderer from 'react-test-renderer';

function mockHandler(): void {
  // tslint:disable-next-line
  console.debug('test text')
}

it('Renders Twonne Logo', () => {
  const tree = renderer.create((
    <TwonneIcon
      fontSize={14}
      onPress={mockHandler}
    />
  )).toJSON();
  expect(tree).toMatchSnapshot();
});
