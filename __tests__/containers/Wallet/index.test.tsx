import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Wallet from '../../../src/containers/Wallet';

test('Wallet renders correctly', () => {
  const tree = renderer.create(
    <Wallet />,
  );
  expect(tree).toBeDefined();
});
