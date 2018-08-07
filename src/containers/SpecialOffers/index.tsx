import * as React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Search from '../../components/Search';
import Carousel from '../../components/Carousel';
import TabBar from '../../components/TabBar';
import TabBarButton from '../../components/TabBar/TabBarButton';
import ItemContainer from '../../components/listItems/ItemContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  offersHeader: {
    backgroundColor: '#ffffff',
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
  tabBarsWrapper: {
    marginStart: 14,
    marginEnd: 14,
  },
  centerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  listContainer: {
    paddingTop: 15,
    paddingBottom: 9,
  },
});

export interface Props { }
export interface State { }

class SpecialOffers extends React.Component<Props, State> {
  renderItem = (listItemInfo: ListRenderItemInfo<any>) => {
    return (
      <ItemContainer>
        <Text>{listItemInfo.item}</Text>
      </ItemContainer>
    );
  }

  keyExtractor = (item: any, index: number) => `offer-${index}`;

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor='#ffffff'
        />
        <View style={styles.offersHeader}>
          <View style={styles.searchWrapper}>
            <Search />
          </View>
          <View style={styles.carouselWrapper}>
            <Carousel />
          </View>
          <View style={styles.tabBarsWrapper}>
            <TabBar>
              <TabBarButton title='Earn BIT' active />
              <TabBarButton title='Redeem BIT' />
            </TabBar>
          </View>
        </View>
        <FlatList
          contentContainerStyle={styles.listContainer}
          data={[
            1,
            2,
            3,
            4,
            5,
          ]}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default SpecialOffers;
