import * as React from 'react';
import * as renderer from 'react-test-renderer';
import WalletMerchant from '../../../src/containers/WalletMerchant';

test('WalletMerchant renders correctly', () => {
  const tree = renderer.create(
    <WalletMerchant />,
  );
  expect(tree).toBeDefined();
});
