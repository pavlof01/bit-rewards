import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SplashScreen from '../../../src/containers/SplashScreen';

test('SplashScreen renders correctly', () => {
  const tree = renderer.create(
    <SplashScreen />,
  );
  expect(tree).toBeDefined();
});
