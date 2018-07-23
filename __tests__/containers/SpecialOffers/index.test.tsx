import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SpecialOffers from '../../../src/containers/SpecialOffers';

test('SpecialOffers renders correctly', () => {
  const tree = renderer.create(
    <SpecialOffers />,
  );
  expect(tree).toBeDefined();
});
