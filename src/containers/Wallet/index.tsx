import * as React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { NavigationActions } from '../../actions/navigation';
import MerchantItem from '../../components/listItems/MerchantItem';

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
  headerCentredText: {
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 24,
    paddingStart: 14,
    paddingEnd: 14,
  },
  summaryTitle: {
    fontSize: 20,
    color: '#303645',
    fontFamily: 'ProximaNova-Regular',
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
  listHeaderText: {
    fontSize: 15,
    color: '#303645',
    fontFamily: 'ProximaNova-Regular',
    marginStart: 26,
    marginEnd: 26,
    marginBottom: 8,
  },
});

export interface WalletProps {
  openWalletMerchant: () => void;
}
export interface State { }

class Wallet extends React.Component<WalletProps, State> {

  renderItem = (listItemInfo: ListRenderItemInfo<any>) => {
    const {
      openWalletMerchant,
    } = this.props;
    return (
      <MerchantItem
        onPress={openWalletMerchant}
        highlight
      />
    );
  }

  keyExtractor = (item: any, index: number) => `offer-${index}`;

  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor='#ffffff'
        />
        <View style={styles.container}>
          <View style={styles.walletHeader}>
            <View style={styles.headerCentredText}>
              <Text style={styles.summaryTitle}>
                {'Summary balance'}
              </Text>
              <Text style={styles.balance}>
                {'27 500 BIT'}
              </Text>
              <Text style={styles.subBalance}>
                {'≈$27,5'}
              </Text>
            </View>
          </View>
          <FlatList
            contentContainerStyle={styles.listContainer}
            data={[
              1,
            ]}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
            ListHeaderComponent={<Text style={styles.listHeaderText}>{'Wallet list'}</Text>}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  openWalletMerchant: () => dispatch(NavigationActions.openWalletMerchant()),
});

const mapStateToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
