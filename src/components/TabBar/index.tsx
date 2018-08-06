import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import TabBarButton from './TabBarButton';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  searchIconBox: {
    width: 16,
    height: 16,
    backgroundColor: '#00000040',
    marginEnd: 7,
  },
  centerText: {
    fontSize: 17,
    color: '#00000040',
    fontFamily: 'ProximaNova-Regular',
  },
  activityBorder: {
    width: '50%',
    height: 2,
    backgroundColor: '#303645',
  },
});

export interface Props { }
export interface State { }

class TabBar extends React.Component<Props, State> {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <TabBarButton title='All offers' active />
          <TabBarButton title='My store offers' />
        </View>
        <View style={styles.activityBorder}/>
      </View>
    );
  }
}

export default TabBar;
