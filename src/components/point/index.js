import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile'
import styled from 'styled-components'
import { PageComponent } from '../../page_component'
import PointExchangeArea from './assembly/point-exchange-area'


const subClass = `.am-wingblank.am-wingblank-lg{
                        margin:0;
                    }
                  `

export default class Point extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        // Fetch({
        //     url: 'http://localhost:3000/integral/root/get/mobile'
        // })
    }
    a() {

    }
    render() {
        return (
            <div>
            <PageComponent subClass={subClass}>
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={() => this.a}
                        afterChange={() => this.a}
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
            </PageComponent>
            <PointExchangeArea/>
            </div>

        )
    }
}

