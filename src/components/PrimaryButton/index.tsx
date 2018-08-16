import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Touchable from '../Touchable';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 18,
    paddingBottom: 14,
    paddingStart: 6,
    paddingEnd: 6,
    height: 48,
    backgroundColor: '#ff764a',
    borderRadius: 4,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 17,
    height: 17,
    fontFamily: 'ProximaNova-Semibold',
    color: '#fff',
  },
  active: {
    color: '#303645',
  },
});

export interface PrimaryButtonProps {
  title?: string;
  active?: boolean;
  onPress?: () => void;
}
export interface State { }

class PrimaryButton extends React.Component<PrimaryButtonProps, State> {
  render() {
    const {
      title,
      active,
      onPress,
    } = this.props;
    return (
      <Touchable onPress={onPress} style={{ flex: 1, height: 44, }}>
        <View style={styles.container}>
          <Text style={[styles.title, active ? styles.active : {}]}>
            {title}
          </Text>
        </View>
      </Touchable>
    );
  }
}

export default PrimaryButton;
