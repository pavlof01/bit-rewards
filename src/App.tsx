import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppNavigator from './AppNavigator';
import { translationMessages } from './utils/i18n';
import LanguageProvider from './containers/LanguageProvider';

export interface Props { }
export interface State { }

class App extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <AppNavigator />
        </LanguageProvider>
      </Provider>
    );
  }
}

export default App;
