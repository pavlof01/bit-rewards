import * as React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { HistoryActions } from '../../actions/history';
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

export interface HistoryProps {
  fetchHistory: (page: number) => any;
  isFetching: boolean;
  items: any;
  error: any;
}

export interface State { }

class History extends React.Component<HistoryProps, State> {

  componentDidMount() {
    const {
      fetchHistory,
    } = this.props;
    fetchHistory(1);
  }

  renderItem = (listItemInfo: ListRenderItemInfo<any>) => {
    return <WalletHistoryItem />;
  }

  keyExtractor = (item: any, index: number) => `wallet-history-${index}`;

  getFlatListData = () => {
    const {
      items,
    } = this.props;
    console.warn(JSON.stringify(items));
    return items;
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchHistory: (page: number) => dispatch(HistoryActions.fetchTransactionList('test-partner-key', page)),
});

const mapStateToProps = (state: any) => ({
  isFetching: state.history.get('isFetching'),
  items: state.history.get('items').toJS(),
  error: state.history.get('error'),
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
