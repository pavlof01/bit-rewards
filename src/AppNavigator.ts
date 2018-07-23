import { createStackNavigator } from 'react-navigation';

import SplashScreen from './containers/SplashScreen';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import RecoverPassword from './containers/RecoverPassword';
import SpecialOffers from './containers/SpecialOffers';

const AppNavigator = createStackNavigator({
  SpecialOffers: {
    screen: SpecialOffers,
    navigationOptions: { header: null },
  },
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: { header: null },
  },
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  RecoverPassword: { screen: RecoverPassword },
  Main: { screen: SplashScreen },
});

export default AppNavigator;
