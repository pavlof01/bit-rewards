import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from '../../components/Search';
import Carousel from '../../components/Carousel';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchWrapper: {
    marginTop: 15,
    marginBottom: 15,
    marginStart: 16,
    marginEnd: 16,
  },
  carouselWrapper: {
    marginStart: 14,
    marginEnd: 14,
  },
  centerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export interface Props { }
export interface State { }

class SpecialOffers extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchWrapper}>
          <Search />
        </View>
        <View style={styles.carouselWrapper}>
          <Carousel />
        </View>
        <Text style={styles.centerText}>
          Empty SpecialOffers
        </Text>
      </View>
    );
  }
}

export default SpecialOffers;
