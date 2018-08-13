import React, { Component } from 'react'
import { inject } from 'mobx-react';
import { TabBar } from 'antd-mobile';
import Loadable from 'react-loadable'
import Loading from '../../common/loading'
import { Page, PageHeader, PageBody } from '../../page_component'


const LoadableOpts = {
  loading: Loading
}

LoadableOpts.loader = () => import('../point')
const Point = Loadable(LoadableOpts)

LoadableOpts.loader = () => import('../agent')
const Agent = Loadable(LoadableOpts)

LoadableOpts.loader = () => import('../promotion')
const Promotion = Loadable(LoadableOpts)

LoadableOpts.loader = () => import('../income')
const Income = Loadable(LoadableOpts)

LoadableOpts.loader = () => import('../mine')
const Mine = Loadable(LoadableOpts)



const bottomBarData = [{
  background: require('@img/bottomBar/icon-integral-n@2x.png'),
  activeBackground: require('@img/bottomBar/icon-integral-s@2x.png'),
  title: '对分',
  key: 'point',
  selectedTab: 'pointTab',
  children: Point,
  onPress: (self, changeIndexTitle) => {
    changeIndexTitle('对分')
    self.setState({
      selectedTab: 'pointTab',
    });
  }
}, {
  background: require('@img/bottomBar/icon-agency-n@2x.png'),
  activeBackground: require('@img/bottomBar/icon-agency-s@2x.png'),
  title: '代理',
  key: 'agent',
  selectedTab: 'agentTab',
  children: Agent,
  onPress: (self, changeIndexTitle) => {
    changeIndexTitle('代理')
    self.setState({
      selectedTab: 'agentTab',
    });
  }
}, {
  key: 'promotion',
  selectedTab: 'promotionTab',
  children: Promotion,
  onPress: (self, changeIndexTitle) => {
    changeIndexTitle('推广')
    self.setState({
      selectedTab: 'promotionTab',
    });
  },
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
  selectedTab: 'incomeTab',
  children: Income,
  onPress: (self, changeIndexTitle) => {
    changeIndexTitle('收益')
    self.setState({
      selectedTab: 'incomeTab',
    });
  }
}, {
  background: require('@img/bottomBar/icon-mine-n@2x.png'),
  activeBackground: require('@img/bottomBar/icon-mine-s@2x.png'),
  title: '我的',
  key: 'mine',
  selectedTab: 'mineTab',
  children: Mine,
  onPress: (self, changeIndexTitle) => {
    changeIndexTitle('我的')
    self.setState({
      selectedTab: 'mineTab',
    });
  }
}]

@inject(({store}) => ({
  changeIndexTitle: store.IndexStore.changeIndexTitle
}))

export default class BottomBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'pointTab',
      hidden: false
    };
  }

  render() {
    const {changeIndexTitle}  = this.props;
    return (
      <Page>
        <PageHeader showBackBtn={false} />
        <PageBody>
          <div style={{ position: 'fixed', height: 'calc(100% - 44px)', width: '100%', top: '44px' }}>
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
                    selectedIcon={<div style={ item.iconStyle || {
                      width: '27px',
                      height: '27px',
                      background: `url(${item.activeBackground}) center center /  27px 27px no-repeat`
                    }}
                    />
                    }
                    selected={this.state.selectedTab === item.selectedTab}
                    onPress={() => item.onPress(this,changeIndexTitle)}
                    data-seed="logId"
                  >
                    <item.children />
                  </TabBar.Item>
                )
              }
            </TabBar>
          </div>
        </PageBody>
      </Page>
    );
  }
}

