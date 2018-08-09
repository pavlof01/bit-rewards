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
    paddingTop: 24,
    paddingBottom: 24,
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
  merchantIcon: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: '#ff764a',
    alignSelf: 'center',
  },
});

export interface Props { }
export interface State { }

class WalletMerchant extends React.Component<Props, State> {
  renderItem = (listItemInfo: ListRenderItemInfo<any>) => {
    return (
      <EarnBitItem />
    );
  }

  keyExtractor = (item: any, index: number) => `offer-${index}`;

  handleInviteFriend = () => {};

  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <View style={styles.walletHeader}>
            <View>
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
              <TabBar>
                <TabBarButton title='Earn BIT' active />
                <TabBarButton title='Redeem BIT' />
                <TabBarButton title='2 Coupons' />
              </TabBar>
            </View>
          </View>
          <FlatList
            contentContainerStyle={styles.listContainer}
            data={[
              1,
              2,
            ]}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default WalletMerchant;
