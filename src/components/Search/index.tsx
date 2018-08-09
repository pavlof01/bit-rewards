import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#00000010',
    borderRadius: 10,
    height: 36,
    padding: 7,
    flexDirection: 'row',
  },
  searchIconBox: {
    width: 16,
    height: 16,
    marginEnd: 7,
  },
  centerText: {
    fontSize: 17,
    color: '#00000040',
    fontFamily: 'ProximaNova-Regular',
  },
});

export interface Props { }
export interface State { }

class Search extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../img/ic_search.png')} style={styles.searchIconBox} />
        <Text style={styles.centerText}>
          {'Search'}
        </Text>
      </View>
    );
  }
}

export default Search;
