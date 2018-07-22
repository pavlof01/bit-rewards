import * as React from 'react'
import AppNavigator from './AppNavigator'

export interface Props { }
export interface State { }

class App extends React.Component<Props, State> {
  render() {
    return (
      <AppNavigator />
    )
  }
}

export default App
