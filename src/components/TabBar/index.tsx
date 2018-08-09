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
    height: 2,
    backgroundColor: '#303645',
  },
});

export interface TabBarProps {
  children: JSX.Element | JSX.Element[];
}
export interface State { }

class TabBar extends React.Component<TabBarProps, State> {
  render() {
    const {
      children,
    } = this.props;
    const tabsCount = React.Children.count(children);
    return (
      <View>
        <View style={styles.container}>
          {children}
        </View>
        <View style={[styles.activityBorder, { width: `${100 / tabsCount}%` } ]} />
      </View>
    );
  }
}

export default TabBar;
