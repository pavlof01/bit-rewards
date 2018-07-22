import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Login from '../../../src/containers/Login';

test('Login renders correctly', () => {
  const tree = renderer.create(
    <Login />,
  );
  expect(tree).toBeDefined();
});
