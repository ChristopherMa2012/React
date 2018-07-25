import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile'
import styled from 'styled-components';

const Container = styled.section`
  width:100%;
  position:absolute;
`

class CreditExchange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: false,
            data:[]
        };
    }

    render() {
        return (
            <Container>
                <div>颤三</div>
                <WingBlank>
                    <Carousel
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
            </Container>
        )
    }
}

export default CreditExchange;