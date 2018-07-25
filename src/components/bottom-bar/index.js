import React, { Component } from 'react'
// import './style.scss'
import styled from 'styled-components'
import BottomBarItem from './assembly/bottom-bar-item'
import Loadable from 'react-loadable'
import Loading from '@/common/loading'
// import { observable,useStrict} from 'mobx';

const CreditExchange = Loadable({
    loader: () => import('@com/credit-exchange'),
    loading: Loading
})

const Agent = Loadable({
    loader: () => import('@com/agent'),
    loading: Loading
})

const Income = Loadable({
    loader: () => import('@com/income'),
    loading: Loading
})

const Mine = Loadable({
    loader: () => import('@com/mine'),
    loading: Loading
})
const Promotion = Loadable({
    loader: () => import('@com/promotion'),
    loading: Loading
})



const Con = styled.div`

`

const ContentContainer = styled.section`
 width:100%;
 height:100vh;
 display:flex;
 flex-direction:row;
 position:relative;
`
const TabBarContainer = styled.section`
position: fixed;
left: 0;
bottom: 0;
z-index: 5;
width: 100%;
border-top: 2px solid lightgrey;
display: flex;
align-items: center;
padding-top:4px;
`

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

    render() {
        return (
            <Con>
                <ContentContainer className="contentContainer">
                    <CreditExchange />
                    <Income />
                    <Mine />
                    <Promotion />
                    <Agent />
                </ContentContainer>
                <TabBarContainer>

                    {
                        bottomBarData.map((item, index) => {
                            const style = {
                                "background": `url(${item.background})`,
                                "backgroundSize": "contain"
                            }
                            if (index === 2) {
                                style["width"] = "42px";
                                style["height"] = "42px";
                            }
                            return (
                                <BottomBarItem style={style} text={item.text} key={index} index={index} />
                            )
                        })
                    }
                </TabBarContainer>
            </Con>
        )
    }
}

export default BottomBar;