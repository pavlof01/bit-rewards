import * as React from 'react';
import AppNavigator from './AppNavigator';
import { translationMessages } from './utils/i18n';
import LanguageProvider from './containers/LanguageProvider';

export interface Props { }
export interface State { }

class App extends React.Component<Props, State> {
  render() {
    return (
      <LanguageProvider messages={translationMessages}>
        <AppNavigator />
      </LanguageProvider>
    );
  }
}

export default App;
