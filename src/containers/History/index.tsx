import * as React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  FlatList, ListRenderItemInfo,
} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import WalletHistoryItem from '../../components/listItems/WalletHistoryItem';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  listContainer: {
    paddingTop: 15,
    paddingBottom: 9,
  },
});

export interface Props { }

export interface State { }

class History extends React.Component<Props, State> {

  renderItem = (listItemInfo: ListRenderItemInfo<any>) => {
    return <WalletHistoryItem />;
  }

  keyExtractor = (item: any, index: number) => `wallet-history-${index}`;

  getFlatListData = () => {
    return [
      1,
      2,
      3,
    ];
  }

  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor='#ffffff'
        />
        <View style={styles.container}>
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

const mapDispatchToProps = () => ({
});

const mapStateToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
