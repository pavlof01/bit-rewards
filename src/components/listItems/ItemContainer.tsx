import * as React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    height: 92,
    marginTop: 2,
    marginBottom: 8,
    marginStart: 14,
    marginEnd: 14,
    overflow: 'hidden',
  },
  itemContainer: {
    height: 90,
  },
  highlightBorder: {
    height: 2,
    backgroundColor: '#ff764a',
  },
});

export interface ItemContainerProps {
  children: React.ReactNode;
}
export interface State { }

class ItemContainer extends React.Component<ItemContainerProps, State> {
  render() {
    const {
      children,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          {children}
        </View>
        <View style={styles.highlightBorder}/>
      </View>
    );
  }
}

export default ItemContainer;
