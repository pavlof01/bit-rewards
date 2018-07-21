import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { App } from '../src/app'

test('App renders correctly', () => {
  const tree = renderer.create(
    <App />,
  )
  expect(tree).toBeDefined()
})
