import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import SplashScreen from './containers/SplashScreen';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import RecoverPassword from './containers/RecoverPassword';
import SpecialOffers from './containers/SpecialOffers';
import Wallet from './containers/Wallet';
import WalletMerchant from './containers/WalletMerchant';

const Main = createBottomTabNavigator({
  SpecialOffers: {
    screen: SpecialOffers,
    navigationOptions: {
      tabBarLabel: 'Special Offers',
    },
  },
  Wallet: {
    screen: Wallet,
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
  WalletMerchant: { screen: WalletMerchant },
});

export default AppNavigator;
