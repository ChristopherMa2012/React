import * as React from 'react'
import { Tabs, WingBlank, Badge, Carousel } from 'antd-mobile'
import { PageComponent } from '../../../page_component'
import { UL, LI ,Icon,Text} from '../../../atom_element'

const subClass = `.am-wingblank.am-wingblank-lg{
    margin:0;
}
`

const tabs = [
    { title: <Badge>信用卡兑分专区</Badge> },
    { title: <Badge>手机卡兑分专区</Badge> }
];

export default class PointExchangeArea extends React.Component {
    state = {
        data: [],
        imgHeight: 176,
    }
    async componentDidMount() {
        const res = await window.Fetch({ url: 'http://localhost:8000/point/bank' })
        this.setState({
            data: res.data.data
        })
    }
    render() {
        return (
            <PageComponent subClass={subClass}>
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
                            <UL style={{
                                justifyContent:'space-around'
                            }}>
                                {
                                    this.state.data.map((item, index) => (
                                         <LI key={index} style={{
                                            flex: '1 0 auto'
                                         }}>
                                               <Icon url={item.logo} width="44" height="44"/>
                                               <Text>{item.name}</Text>
                                         </LI>
                                    ))
                                }
                            </UL>
                        </Carousel>
                    </WingBlank>
                </Tabs>
            </PageComponent>
        )


    }
}