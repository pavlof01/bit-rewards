import * as React from 'react'
import * as renderer from 'react-test-renderer'
import SignUp from '../../../src/containers/SignUp'

test('Login renders correctly', () => {
  const tree = renderer.create(
    <SignUp />,
  )
  expect(tree).toBeDefined()
})
