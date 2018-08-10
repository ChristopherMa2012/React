import * as React from 'react'
import { Tabs, WingBlank, Badge, Carousel } from 'antd-mobile'
import { PageComponent } from '../../../page_component'
import { UL, LI, Icon, Text } from '../../../atom_element'

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
        const res = await window.Fetch({ url: '/point/bank' })
        this.setState({
            data: res.data.data
        })
    }

    getCrediCardChildren(data) {
        if(!data) return null;
        let childrenNum = Math.floor(data.length / 8);
        childrenNum += data.length % 8 > 0 ? 1 : 0;
        let arr = [];
        for (let i = 0; i < childrenNum; i++) {
            arr[i] = data.slice(8 * i, 8 * i + 8)
        }
        return (
            arr.map((item, index) =>
                <div key={index} 
                style={{ 
                    height: '184px', 
                    display: 'flex', 
                    flexWrap: 'wrap',
                    padding:'20px 0 13px'
                    }}>
                    {
                        item.map((subItem, subIndex) =>
                            <div key={subIndex} style={{order:'-1',flex:'0 0 25%'}}>
                                <Icon url={subItem.logo} width="44" height="44"  style={{margin:'0 auto',border:'1px solid #2290F0',borderRadius:'3px'}}/>
                                <Text 
                                   color="#242424" 
                                   size="11" 
                                   lineHeight="16" 
                                   align="center"
                                   style={{
                                       marginTop:'6px'
                                       }}>{subItem.name}</Text>
                            </div>
                        )
                    }
                </div>
            )
        )
    }

    render() {
        const {mobileData}  = this.props;

        return (
            <PageComponent subClass={subClass}>
                <Tabs tabs={tabs}
                    initialPage={0}
                    swipeable={false}
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
                            {this.getCrediCardChildren(this.state.data)}
                        </Carousel>
                    </WingBlank>
                    <WingBlank>
                        <Carousel
                            autoplay={false}
                            infinite
                            beforeChange={() => this.a}
                            afterChange={() => this.a}
                            style={{height:'184px'}}
                        >
                            {this.getCrediCardChildren(mobileData)}
                        </Carousel>
                    </WingBlank>                    
                </Tabs>
            </PageComponent>
        )


    }
}