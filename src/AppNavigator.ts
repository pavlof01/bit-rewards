import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import SplashScreen from './containers/SplashScreen';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import RecoverPassword from './containers/RecoverPassword';
import SpecialOffers from './containers/SpecialOffers';

const Main = createBottomTabNavigator({
  SpecialOffers: {
    screen: SpecialOffers,
    navigationOptions: {
      tabBarLabel: 'Special Offers',
    },
  },
  Wallet: {
    screen: SpecialOffers,
    navigationOptions: {
      tabBarLabel: 'Wallet',
    },
  },
  Profile: {
    screen: SpecialOffers,
    navigationOptions: {
      tabBarLabel: 'Profile',
    },
  },
  Other: {
    screen: SpecialOffers,
    navigationOptions: {
      tabBarLabel: 'Other',
    },
  },
});

const AppNavigator = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: { header: null },
  },
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: { header: null },
  },
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  RecoverPassword: { screen: RecoverPassword },
});

export default AppNavigator;
