import * as React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import ItemContainer from '../../components/listItems/ItemContainer';

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

class Wallet extends React.Component<Props, State> {
  renderItem = (listItemInfo: ListRenderItemInfo<any>) => {
    return (
      <ItemContainer>
        <Text>{listItemInfo.item}</Text>
      </ItemContainer>
    );
  }

  keyExtractor = (item: any, index: number) => `offer-${index}`;

  render() {
    return (
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
        />
      </View>
    );
  }
}

export default Wallet;
