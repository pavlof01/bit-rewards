import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import ClickableItemContainer from './ClickableItemContainer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop: 22,
    paddingBottom: 22,
  },
  titleText: {
    fontSize: 15,
    color: '#303645',
    fontFamily: 'ProximaNova-Regular',
  },
  bitText: {
    fontSize: 18,
    color: '#303645',
    fontFamily: 'ProximaNova-Bold',
  },
});

export interface MerchantItemProps {
  onPress?: () => void;
  highlight?: boolean;
}
export interface State { }

class MerchantItem extends React.Component<MerchantItemProps, State> {
  render() {
    const {
      onPress,
      highlight,
    } = this.props;
    return (
      <ClickableItemContainer
        onPress={onPress}
        highlight={highlight}
      >
        <View style={styles.container}>
          <Text style={styles.titleText}>
            {'BitRewards'}
          </Text>
          <Text style={styles.bitText}>
            {'200 BIT'}
          </Text>
        </View>
      </ClickableItemContainer>
    );
  }
}

export default MerchantItem;
