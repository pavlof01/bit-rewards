import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Touchable from '../Touchable';
import Status from '../Status'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    marginTop: 4,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
  },
  contentRow: {
    paddingStart: 26,
    paddingEnd: 26,
    paddingTop: 27,
    paddingBottom: 19,
  },
  historyTitleRow: {
    flexDirection: 'row',
    marginBottom: 19,
  },
  row: {
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 12,
    color: '#303545',
    fontFamily: 'ProximaNova-Regular',
  },
  operationText: {
    flex: 1,
    fontSize: 14,
    color: '#303545',
    fontFamily: 'ProximaNova-Semibold',
  },
  bitValue: {
    fontSize: 18,
    color: '#303545',
    fontFamily: 'ProximaNova-Bold',
  },
  addressNumber: {
    flex: 1,
    fontSize: 18,
    color: '#303545',
    fontFamily: 'ProximaNova-Bold',
  },
  bitSubValue: {
    fontSize: 14,
    color: '#30354550',
    fontFamily: 'ProximaNova-Regular',
  },
});

export interface WalletHistoryItemContainerProps {
  onPress?: () => void;
}
export interface State { }

class WalletHistoryItem extends React.Component<WalletHistoryItemContainerProps, State> {
  render() {
    const {
      onPress,
    } = this.props;
    return (
      <View style={styles.container}>
        <Touchable onPress={onPress}>
          <View style={styles.contentRow}>
            <View style={styles.historyTitleRow}>
              <Text style={styles.titleText}>
                {'ID 4. Today, 12:42 pm'}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.operationText}>
                {'Deposit from'}
              </Text>
              <Text style={styles.bitValue}>
                {'+ 1 200 BIT'}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.addressNumber}>
                {'0x59************6552'}
              </Text>
              <Text style={styles.bitSubValue}>
                {'≈$1,2'}
              </Text>
            </View>
            <View style={styles.row}>
              <Status status='' />
            </View>
          </View>
        </Touchable>
      </View>
    );
  }
}

export default WalletHistoryItem;
