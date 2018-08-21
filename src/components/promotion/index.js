/*
 * @Author: chris 
 * @Date: 2018-08-14 16:22:49 
 * @Last Modified by: chris
 * @Last Modified time: 2018-08-16 09:46:15
 */
import React, { Component } from 'react'
// import styled from 'styled-components'
import { Tabs, Badge } from 'antd-mobile'
import { PageComponent,RichText, List } from '../../page_component'
import { UL, LI, IMG, Title } from '../../atom_element'


const subClass = `
   .item-container{
       display:flex;
       flex-wrap:wrap;
       justify-content: space-between;
       background-color:#F2F3F7;
       padding: 0 3.2%;
       li{
          flex:0 0 48.43%;
          overflow:hidden;
          margin-top:12px;
          padding-bottom:21px;
          background-color:#FFFFFF;
          .img-style{
              width:75.29%;
              margin:16px auto 0;
          }
       }
   };
`

const tabs = [
    { title: <Badge>推广</Badge> },
    { title: <Badge>案例</Badge> },
    { title: <Badge>活动</Badge> },
];

const promotionData = [{
    title: '分享二维码图片',
    icon: require('@img/promotion/icon-code@2x.png'),
    subTitle: '分享二维码  ++美观又时尚--'
}, {
    title: '分享链接',
    icon: require('@img/promotion/icon-link@2x.png'),
    subTitle: '分享链接  ++有钱一起赚--'
}, {
    title: '面对面开通',
    icon: require('@img/promotion/icon-face@2x.png'),
    subTitle: '当面账户开通   ++方便快捷--'
}, {
    title: '发圈模版',
    icon: require('@img/promotion/Group6@2x.png'),
    subTitle: '中央文案 中央美图  ++一键更新--'
}]





class Promotion extends Component {
    render() {
        return (
            <PageComponent subClass={subClass}>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        {/* <UL className="item-container">
                            {
                                promotionData.map((item, index) => (
                                    <LI key={index}>
                                        <IMG src={item.icon} className="img-style" />
                                        <Title size="15" color="#242424" align="center" style={{ margin: ' 8px 0' }}>{item.title}</Title>
                                        <RichText
                                            textStyleArray={[{ display: 'block', textAlign: 'center' }]}
                                            style={{ textAlign: 'center', lineHeight: '18px', color: '#999999', fontSize: '13px' }}>
                                            {item.subTitle}
                                        </RichText>
                                    </LI>
                                ))
                            }
                        </UL> */}
                        <List listData={promotionData}>
                            <IMG  />
                            <Title></Title>
                            <RichText ></RichText>
                        </List>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        暂未开放
                   </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        暂未开放
                    </div>
                </Tabs>
            </PageComponent>

        )
    }
}

export default Promotion;