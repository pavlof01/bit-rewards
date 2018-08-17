import * as React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#30364540',
    marginBottom: 20,
  },
  iconWrapper: {
    width: 20,
    marginEnd: 16,
  },
  input: {
    flex: 1,
    color: '#303645',
    fontSize: 17,
    fontFamily: 'ProximaNova-Regular',
  },
});

export interface AuthInputFieldProps {
  placeholder: string;
}
export interface State { }

class AuthInputField extends React.Component<AuthInputFieldProps, State> {
  render() {
    const {
      placeholder,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.iconWrapper} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={'#30364560'}
          underlineColorAndroid='transparent'
        />
      </View>
    );
  }
}

export default AuthInputField;
