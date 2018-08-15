import * as React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import Search from '../../components/Search';
import Carousel from '../../components/Carousel';
import TabBar from '../../components/TabBar';
import TabBarButton from '../../components/TabBar/TabBarButton';
import EarnBitItem from '../../components/listItems/EarnBitItem';
import SpendBitItem from '../../components/listItems/SpendBitItem';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
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

const EARN_BIT_TAB_INDEX = 0;
const REDEEM_BIT_TAB_INDEX = 1;

export interface SpecialOffersProps {
  isFetching: boolean;
  actionItems: any;
  rewardItems: any;
  error: any;
}

export interface SpecialOffersState {
  activeTab: number;
}

class SpecialOffers extends React.Component<SpecialOffersProps, SpecialOffersState> {
  constructor(props: SpecialOffersProps) {
    super(props);

    this.state = {
      activeTab: 0,
    };
  }

  handleChangeTab = (index: number) => this.setState({ activeTab: index });

  getFlatListData = () => {
    const {
      actionItems,
      rewardItems,
    } = this.props;
    const {
      activeTab,
    } = this.state;
    switch (activeTab) {
      case EARN_BIT_TAB_INDEX:
        return actionItems;
      case REDEEM_BIT_TAB_INDEX:
        return rewardItems;
      default:
        return [];
    }
  }

  renderItem = (listItemInfo: ListRenderItemInfo<any>) => {
    const {
      activeTab,
    } = this.state;
    switch (activeTab) {
      case EARN_BIT_TAB_INDEX:
        return (
          <EarnBitItem />
        );
      case REDEEM_BIT_TAB_INDEX:
        return (
          <SpendBitItem />
        );
      default:
        return null;
    }
  }

  keyExtractor = (item: any, index: number) => `offer-${index}`;

  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
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
              <TabBar onChange={this.handleChangeTab}>
                <TabBarButton title='Earn BIT' />
                <TabBarButton title='Redeem BIT' />
              </TabBar>
            </View>
          </View>
          <FlatList
            contentContainerStyle={styles.listContainer}
            data={this.getFlatListData()}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
});

const mapStateToProps = (state: any) => ({
  isFetching: state.specialOffers.get('isFetching'),
  actionItems: state.specialOffers.get('actionItems').toJS(),
  rewardItems: state.specialOffers.get('rewardItems').toJS(),
  error: state.specialOffers.get('error'),
});

export default connect(mapStateToProps, mapDispatchToProps)(SpecialOffers);
