import * as React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
});

export interface Props { }

export interface State { }

class History extends React.Component<Props, State> {

  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor='#ffffff'
        />
        <View style={styles.container}>
          {null}
        </View>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = () => ({
});

const mapStateToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
