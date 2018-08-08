import * as React from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import ItemContainer from './ItemContainer';
import Touchable from '../Touchable';

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  iconColumn: {
    paddingStart: 12,
    paddingEnd: 12,
    paddingTop: 16,
    paddingBottom: 16,
  },
  arrowColumn: {
    paddingStart: 12,
    paddingEnd: 12,
    paddingTop: 30,
    paddingBottom: 30,
  },
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ff764a',
  },
  chevronBox: {
    height: 20,
    justifyContent: 'center',
  },
  chevron: {
    width: 8,
    height: 13,
  },
  itemContainer: {
    flex: 1,
  },
});

export interface ClickableItemContainerProps {
  children: JSX.Element | JSX.Element[];
  onPress?: () => void;
}
export interface State { }

class ClickableItemContainer extends React.Component<ClickableItemContainerProps, State> {
  render() {
    const {
      children,
      onPress,
    } = this.props;
    return (
      <ItemContainer>
        <Touchable onPress={onPress}>
          <View style={styles.container}>
            <View style={styles.iconColumn}>
              <View style={styles.iconBox} />
            </View>
            <View style={styles.itemContainer}>
              {children}
            </View>
            <View style={styles.arrowColumn}>
              <View style={styles.chevronBox}>
                <Image source={require('../../img/chevron.png')} style={styles.chevron} />
              </View>
            </View>
          </View>
        </Touchable>
      </ItemContainer>
    );
  }
}

export default ClickableItemContainer;
