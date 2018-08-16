import * as React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import AuthLogo from '../../components/AuthLogo';
import PrimaryButton from '../../components/PrimaryButton';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
  },
  logoWrapper: {
    justifyContent: 'center',
    flex: 1,
  },
});

export interface LoginProps {
  fetchHistory: (page: number, perPage: number) => any;
  isFetching: boolean;
  items: any;
  error: any;
}

export interface State { }

class Login extends React.Component<LoginProps, State> {
  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor='#ffffff'
        />
        <View style={styles.container}>
          <View style={styles.logoWrapper}>
            <AuthLogo />
          </View>
          <PrimaryButton
            title={'Log in'}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
});

const mapStateToProps = (state: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
