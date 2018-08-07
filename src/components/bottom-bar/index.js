import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import Loadable from 'react-loadable'
import Loading from '../../common/loading'

const LoadableOpts = {
  loader: () => import('../point'),
  loading: Loading
}
const Point = Loadable(LoadableOpts)

LoadableOpts.loader = ()=> import('../agent')
const Agent = Loadable(LoadableOpts)

LoadableOpts.loader = ()=> import('../promotion')
const Promotion = Loadable(LoadableOpts)
 
const Income = Loadable({
  loader: () => import('../income'),
  loading: Loading
})

const Mine = Loadable({
  loader: () => import('../mine'),
  loading: Loading
})



const bottomBarData = [{
  background: require('@img/bottomBar/icon-integral-n@2x.png'),
  activeBackground: require('@img/bottomBar/icon-integral-s@2x.png'),
  title: '对分',
  key: 'point',
  selectedTab: 'blueTab',
  children: Point,
  onPress: (self) => {
    self.setState({
      selectedTab: 'blueTab',
    });
  }
}, {
  background: require('@img/bottomBar/icon-agency-n@2x.png'),
  activeBackground: require('@img/bottomBar/icon-agency-s@2x.png'),
  title: '代理',
  key: 'agent',
  selectedTab: 'redTab',
  children: Agent,
  onPress: (self) => {
    self.setState({
      selectedTab: 'redTab',
    });
  }
}, {
  key: 'promotion',
  selectedTab: 'pinkTab',
  children: Promotion,
  onPress: () => { },
  iconStyle: {
    width: '42px',
    height: '42px',
    background: `url(${require('@img/bottomBar/icon-generalize@2x.png')}) center center /  42px 42px no-repeat`
  }
}, {
  background: require('@img/bottomBar/icon-earnings-n@2x.png'),
  activeBackground: require('@img/bottomBar/icon-earnings-s@2x.png'),
  title: '收益',
  key: 'income',
  selectedTab: 'greenTab',
  children: Income,
  onPress: (self) => {
    self.setState({
      selectedTab: 'greenTab',
    });
  }
}, {
  background: require('@img/bottomBar/icon-mine-n@2x.png'),
  activeBackground: require('@img/bottomBar/icon-mine-s@2x.png'),
  title: '我的',
  key: 'mine',
  selectedTab: 'yellowTab',
  children: Mine,
  onPress: (self) => {
    self.setState({
      selectedTab: 'yellowTab',
    });
  }
}]


class BottomBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: true,
    };
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          tabBarPosition="bottom"
        >
          {
            bottomBarData.map(item =>
              <TabBar.Item
                title={item.title}
                key={item.key}
                icon={<div style={item.iconStyle || {
                  width: '27px',
                  height: '27px',
                  background: `url(${item.background}) center center /  27px 27px no-repeat`
                }}
                />
                }
                selectedIcon={<div style={{
                  width: '27px',
                  height: '27px',
                  background: `url(${item.activeBackground}) center center /  27px 27px no-repeat`
                }}
                />
                }
                selected={this.state.selectedTab === item.selectedTab}
                onPress={() => item.onPress(this)}
                data-seed="logId"
              >
                <item.children />
              </TabBar.Item>
            )
          }
        </TabBar>
      </div>
    );
  }
}

export default BottomBar;