import * as React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import ClickableItemContainer from '../../components/listItems/ClickableItemContainer';

const styles = StyleSheet.create({
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
});

export interface Props { }
export interface State { }

class WalletMerchant extends React.Component<Props, State> {
  renderItem = (listItemInfo: ListRenderItemInfo<any>) => {
    return (
      <ClickableItemContainer>
        <Text>{listItemInfo.item}</Text>
      </ClickableItemContainer>
    );
  }

  keyExtractor = (item: any, index: number) => `offer-${index}`;

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

export default WalletMerchant;
