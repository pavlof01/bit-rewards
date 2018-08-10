import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { createBottomBarOptions } from './components/BottomBar/styles';
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
    navigationOptions: createBottomBarOptions('Special Offers', null),
  },
  Wallet: {
    screen: Wallet,
    navigationOptions: createBottomBarOptions('Wallet', null),
  },
  Profile: {
    screen: SpecialOffers,
    navigationOptions: createBottomBarOptions('Profile', null),
  },
  Other: {
    screen: SpecialOffers,
    navigationOptions: createBottomBarOptions('Other', null),
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
  WalletMerchant: {
    screen: WalletMerchant,
    navigationOptions: { header: null },
  },
});

export default AppNavigator;
