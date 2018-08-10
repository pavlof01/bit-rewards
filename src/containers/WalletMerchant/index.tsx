import * as React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
  SafeAreaView,
} from 'react-navigation';
import TabBar from '../../components/TabBar';
import TabBarButton from '../../components/TabBar/TabBarButton';
import EarnBitItem from '../../components/listItems/EarnBitItem';
import SpendBitItem from '../../components/listItems/SpendBitItem';
import Touchable from '../../components/Touchable';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  walletHeader: {
    backgroundColor: '#ffffff',
  },
  tabBarsWrapper: {
    marginStart: 14,
    marginEnd: 14,
  },
  headerCentredText: {
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingStart: 14,
    paddingEnd: 14,
  },
  merchantTitle: {
    fontSize: 19,
    color: '#303645',
    fontFamily: 'ProximaNova-Bold',
  },
  balance: {
    fontSize: 30,
    color: '#303645',
    fontFamily: 'ProximaNova-Bold',
  },
  subBalance: {
    fontSize: 15,
    color: '#30364564',
    fontFamily: 'ProximaNova-Regular',
  },
  listContainer: {
    paddingTop: 15,
    paddingBottom: 9,
  },
  merchantIconWrapper: {
    paddingTop: 8,
  },
  merchantIcon: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: '#ff764a',
    alignSelf: 'center',
  },
  buttonContainer: {
    alignSelf: 'center',
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 16,
  },
  button: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingStart: 25,
    paddingEnd: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ff764a',
  },
  buttonText: {
    fontSize: 15,
    color: '#ff764a',
    fontFamily: 'ProximaNova-Regular',
  },
  backArrowWrapper: {
    top: 0,
    left: 0,
    width: 42,
    height: 40,
    position: 'absolute',
  },
  backArrowBox: {
    width: 42,
    height: 40,
    padding: 7,
  },
  backArrowImage: {
    width: 20,
    height: 18,
    margin: 4,
  },
});

export interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface WalletMerchantState {
  activeTab: number;
}

const EARN_BIT_TAB_INDEX = 0;
const REDEEM_BIT_TAB_INDEX = 1;
const COUPONS_TAB_INDEX = 2;

class WalletMerchant extends React.Component<Props, WalletMerchantState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      activeTab: 0,
    };
  }

  renderItem = (listItemInfo: ListRenderItemInfo<any>) => {
    const {
      activeTab,
    } = this.state;
    switch (activeTab) {
      case EARN_BIT_TAB_INDEX:
        return (
          <EarnBitItem />
        );
      case REDEEM_BIT_TAB_INDEX:
        return (
          <SpendBitItem />
        );
      case COUPONS_TAB_INDEX:
        return (
          <SpendBitItem />
        );
      default:
        return null;
    }
  }

  keyExtractor = (item: any, index: number) => `offer-${index}`;

  handleInviteFriend = () => {};

  handleChangeTab = (index: number) => this.setState({ activeTab: index });

  handleBack = () => {
    const {
      navigation,
    } = this.props;
    navigation.goBack();
  }

  getFlatListData = () => {
    const {
      activeTab,
    } = this.state;
    const earnBitListData = [
      1,
      2,
    ];
    const redeemBitListData = [
      1,
      2,
      3,
      4,
    ];
    const couponsListData = [
      1,
      2,
      3,
    ];
    switch (activeTab) {
      case EARN_BIT_TAB_INDEX:
        return earnBitListData;
      case REDEEM_BIT_TAB_INDEX:
        return redeemBitListData;
      case COUPONS_TAB_INDEX:
        return couponsListData;
      default:
        return earnBitListData;
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor='#ffffff'
        />
        <View style={styles.container}>
          <View style={styles.walletHeader}>
            <View style={styles.merchantIconWrapper}>
              <View style={styles.merchantIcon} />
            </View>
            <View style={styles.headerCentredText}>
              <Text style={styles.merchantTitle}>
                {'Starbucks'}
              </Text>
              <Text style={styles.balance}>
                {'14 000 BIT'}
              </Text>
              <Text style={styles.subBalance}>
                {'≈$14'}
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <Touchable onPress={this.handleInviteFriend}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>
                    {'Invite a friend'}
                  </Text>
                </View>
              </Touchable>
            </View>
            <View style={styles.tabBarsWrapper}>
              <TabBar onChange={this.handleChangeTab}>
                <TabBarButton title='Earn BIT' />
                <TabBarButton title='Redeem BIT' />
                <TabBarButton title='2 Coupons' />
              </TabBar>
            </View>
            <View style={styles.backArrowWrapper}>
              <Touchable onPress={this.handleBack}>
                <View style={styles.backArrowBox}>
                  <Image source={require('../../img/back_arrow.png')} style={styles.backArrowImage} />
                </View>
              </Touchable>
            </View>
          </View>
          <FlatList
            contentContainerStyle={styles.listContainer}
            data={this.getFlatListData()}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default WalletMerchant;
