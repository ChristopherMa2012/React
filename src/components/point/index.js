import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile'
import styled from 'styled-components'
import { PageComponent, RichText } from '../../page_component'
import { Button, Input } from '../../atom_element'
import PointExchangeArea from './assembly/point-exchange-area'


const subClass = `.am-wingblank.am-wingblank-lg{
                        margin:0;
                    }      
                    `
const PointCalculator = styled.section`
  border-radius: 4px;
  background-color:#FFFFFF;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:19px 0 30px;  
  margin: 0 18px 100px; 
`

const InputContainer = styled.div`
 border-bottom:1px solid #CCCCCC;
 padding:11px 8px; 
 min-width:140px;  
 margin-bottom:11px;
`

export default class Point extends Component {
    state = {
        data: [],
        mobileData: [],
        imgHeight: 176,
    }
    async  componentDidMount() {
        const res = await window.Fetch({ url: 'point/mobile' })
        this.setState({
            data: res.data.banner,
            mobileData: res.data.data
        })

    }
    a() {

    }
    render() {
        return (
            <PageComponent subClass={subClass}>
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={() => this.a}
                        afterChange={() => this.a}
                    >
                        {this.state.data && this.state.data.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={item.pic_url}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <PointExchangeArea mobileData={this.state.mobileData} />
                <RichText
                    textStyleArray={[{ color: '#2290F0' }, { color: '#2290F0' }]}
                    style={{ padding: '0 20px', lineHeight: '20px', color: '#999999', marginTop: '16px' }}
                >
                    ++兑换介绍：--【中国工商银行】您当前身份为++青铜--，每1万积分兑换210.5元，最低799分起兑换。
                </RichText>
                <RichText
                    textStyleArray={[{ color: '#2290F0' }, { color: '#2290F0' }]}
                    style={{ padding: '0 20px', lineHeight: '20px', color: '#999999', marginTop: '16px' }}
                >
                    ++积分查询方式：--【中国工商银行】 拨打工商银行信用卡电话：++95588--，转人工服务，向工商银行信用卡中心的客服提出查询积分要求即可。
                </RichText>
                <Button
                    style={
                        {
                            backgroundColor: '#4690E9',
                            width: '90.4%',
                            lineHeight: '44px',
                            color: '#FFFFFF',
                            fontSize: '18px',
                            borderRadius: '4px',
                            margin: '16px auto'
                        }}>
                    立即兑换
                </Button>
                <PointCalculator>
                    <div>
                        <InputContainer>
                            <Input
                                type="text"
                                placeholder="请输入兑换积分"
                                style={{
                                    lineHeight: '24px',
                                    width: '140px',
                                    fontSize: '20px'
                                }} />
                        </InputContainer>
                        <RichText
                            textStyleArray={[{ color: '#F87C32', lineHeight: '17px' }]}
                            style={{ textAlign: 'center', color: '#7A7A7A' }}>
                            可兑换金额约 ++¥ 0.00--
                        </RichText>
                    </div>
                </PointCalculator>
            </PageComponent >

        )
    }
}

