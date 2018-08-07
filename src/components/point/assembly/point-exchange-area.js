import * as React from 'react'
import { Tabs, WingBlank, Badge,Carousel } from 'antd-mobile'
import { PageComponent } from '../../../page_component'


const tabs = [
    { title: <Badge>信用卡兑分专区</Badge> },
    { title: <Badge>手机卡兑分专区</Badge> }
];

export default class PointExchangeArea extends React.Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    render() {
        return (
            <PageComponent>
                <Tabs tabs={tabs}
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <WingBlank>
                        <Carousel
                            autoplay={false}
                            infinite
                            beforeChange={() => this.a}
                            afterChange={() => this.a}
                        >
                            {this.state.data.map(val => (
                                   <div>index</div>
                            ))}
                        </Carousel>
                    </WingBlank>
                </Tabs>
            </PageComponent>
        )


    }
}