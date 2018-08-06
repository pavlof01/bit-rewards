import * as React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  activityBorder: {
    width: '50%',
    height: 2,
    backgroundColor: '#303645',
  },
});

export interface TabBarProps {
  children: JSX.Element[];
}
export interface State { }

class TabBar extends React.Component<TabBarProps, State> {
  render() {
    const {
      children,
    } = this.props;
    return (
      <View>
        <View style={styles.container}>
          {children}
        </View>
        <View style={styles.activityBorder}/>
      </View>
    );
  }
}

export default TabBar;
