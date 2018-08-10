import * as React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import MerchantItem from '../../components/listItems/MerchantItem';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  profileHeader: {
    backgroundColor: '#ffffff',
  },
  headerCentredText: {
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 24,
    paddingStart: 14,
    paddingEnd: 14,
  },
  profileAvatarWrapper: {
    paddingTop: 8,
  },
  profileAvatar: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: '#ff764a',
    alignSelf: 'center',
  },
  userName: {
    fontSize: 30,
    color: '#303645',
    fontFamily: 'ProximaNova-Bold',
  },
  listContainer: {
    paddingTop: 15,
    paddingBottom: 9,
  },
  listHeaderText: {
    fontSize: 15,
    color: '#303645',
    fontFamily: 'ProximaNova-Regular',
    marginStart: 26,
    marginEnd: 26,
    marginBottom: 8,
    textAlign: 'center',
  },
});

export interface ProfileProps {
}

export interface State { }

class Profile extends React.Component<Profile, State> {

  renderItem = (listItemInfo: ListRenderItemInfo<any>) => {
    return (
      <MerchantItem
        highlight
      />
    );
  }

  keyExtractor = (item: any, index: number) => `offer-${index}`;

  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor='#ffffff'
        />
        <View style={styles.container}>
          <View style={styles.profileHeader}>
            <View style={styles.profileAvatarWrapper}>
              <View style={styles.profileAvatar} />
            </View>
            <View style={styles.headerCentredText}>
              <Text style={styles.userName}>
                {'User Name'}
              </Text>
            </View>
          </View>
          <FlatList
            contentContainerStyle={styles.listContainer}
            data={[
            ]}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
            ListHeaderComponent={<Text style={styles.listHeaderText}>{'Your loyalty card'}</Text>}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = () => ({
});

const mapStateToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
