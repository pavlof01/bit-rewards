import * as React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import TabBar from '../../components/TabBar';
import TabBarButton from '../../components/TabBar/TabBarButton';
import EarnBitItem from '../../components/listItems/EarnBitItem';

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
});

export interface Props { }
export interface WalletMerchantState {
  activeTab: number;
}

class WalletMerchant extends React.Component<Props, WalletMerchantState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      activeTab: 0,
    };
  }

  renderItem = (listItemInfo: ListRenderItemInfo<any>) => {
    return (
      <EarnBitItem />
    );
  }

  keyExtractor = (item: any, index: number) => `offer-${index}`;

  handleInviteFriend = () => {};

  handleChangeTab = (index: number) => this.setState({ activeTab: index });

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
      case 0:
        return earnBitListData;
      case 1:
        return redeemBitListData;
      case 2:
        return couponsListData;
      default:
        return earnBitListData;
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
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
            <Button title={'Invite a friend'} onPress={this.handleInviteFriend} />
            <View style={styles.tabBarsWrapper}>
              <TabBar onChange={this.handleChangeTab}>
                <TabBarButton title='Earn BIT' />
                <TabBarButton title='Redeem BIT' />
                <TabBarButton title='2 Coupons' />
              </TabBar>
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
