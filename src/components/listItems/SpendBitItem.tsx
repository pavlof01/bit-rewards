import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import ItemContainer from './ItemContainer';
import Touchable from '../Touchable';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 24,
    paddingStart: 26,
    paddingEnd: 12,
  },
  infoColumn: {
    flex: 1,
    flexDirection: 'column',
    paddingEnd: 8,
  },
  iconColumn: {
    flexDirection: 'column',
  },
  merchantIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ff764a',
    alignSelf: 'center',
  },
  merchantTitleWrapper: {
    flexDirection: 'row',
  },
  discountText: {
    fontSize: 22,
    color: '#303645',
    fontFamily: 'ProximaNova-Bold',
  },
  descriptionText: {
    fontSize: 16,
    color: '#30364560',
    fontFamily: 'ProximaNova-Regular',
    marginBottom: 17,
  },
  buttonContainer: {
    width: 100,
    borderRadius: 20,
    overflow: 'hidden',
  },
  button: {
    borderRadius: 20,
    height: 40,
    backgroundColor: '#ff764a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'ProximaNova-Bold',
  },
});

export interface EarnBitItemProps {
  onPress?: () => void;
}
export interface State { }

class SpendBitItem extends React.Component<EarnBitItemProps, State> {
  handleClick = () => {
    const {
      onPress,
    } = this.props;
    if (typeof onPress === 'function') {
      onPress();
    }
  }

  render() {
    return (
      <ItemContainer>
        <View style={styles.container}>
          <View style={styles.infoColumn}>
            <View style={styles.merchantTitleWrapper}>
              <Text>{'McDonalds'}</Text><Text>{'/Starbux'}</Text>
            </View>
            <Text style={styles.discountText}>
              {'Discount $2'}
            </Text>
            <Text style={styles.descriptionText}>
              {'Use $2 discount for purchase over $5000'}
            </Text>
            <View style={styles.buttonContainer}>
              <Touchable onPress={this.handleClick}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>
                    {'200 BIT'}
                  </Text>
                </View>
              </Touchable>
            </View>
          </View>
          <View style={styles.iconColumn}>
            <View style={styles.merchantIcon} />
          </View>
        </View>
      </ItemContainer>
    );
  }
}

export default SpendBitItem;
