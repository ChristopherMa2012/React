<<<<<<< HEAD
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

=======
import React, { Component } from 'react'
// import './style.scss'
import styled from 'styled-components'
// import BottomBarItem from './assembly/bottom-bar-item'
import Loadable from 'react-loadable'
import Loading from '@/common/loading'
import { TabBar } from 'antd-mobile';
import './index.css'
// import { observable,useStrict} from 'mobx';

// const CreditExchange = Loadable({
//     loader: () => import('@com/credit-exchange'),
//     loading: Loading
// })

// const Agent = Loadable({
//     loader: () => import('@com/agent'),
//     loading: Loading
// })

// const Income = Loadable({
//     loader: () => import('@com/income'),
//     loading: Loading
// })

// const Mine = Loadable({
//     loader: () => import('@com/mine'),
//     loading: Loading
// })
// const Promotion = Loadable({
//     loader: () => import('@com/promotion'),
//     loading: Loading
// })




const bottomBarData = [{
    background: require('@img/bottomBar/icon-integral-n@2x.png'),
    text: '对分'
}, {
    background: require('@img/bottomBar/icon-agency-n@2x.png'),
    text: '代理'
}, {
    background: require('@img/bottomBar/icon-generalize@2x.png')
}, {
    background: require('@img/bottomBar/icon-earnings-n@2x.png'),
    text: '收益'
}, {
    background: require('@img/bottomBar/icon-mine-n@2x.png'),
    text: '我的'
}]



class BottomBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: false,
            data: []
        };
    }
    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
                <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                            hidden: !this.state.hidden,
                        });
                    }}
                >
                    Click to show/hide tab-bar
            </a>
                <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                            fullScreen: !this.state.fullScreen,
                        });
                    }}
                >
                    Click to switch fullscreen
            </a>
            </div>
        );
    }
    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="Life"
                        key="Life"
                        icon={<div style={{
                            width: '27px',
                            height: '27px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '27px',
                            height: '27px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                        data-seed="logId"
                    >
                        {this.renderContent('Life')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '27px',
                                height: '27px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '27px',
                                height: '27px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="Koubei"
                        key="Koubei"
                        badge={'new'}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent('Koubei')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '27px',
                                height: '27px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '27px',
                                height: '27px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="Friend"
                        key="Friend"
                        dot
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                        {this.renderContent('Friend')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        title="My"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    >
                        {this.renderContent('My')}
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}

>>>>>>> 07e5dcb8a2640a950eee88325cbadeac2bfd52c3
export default BottomBar;