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
        data: [],
        imgHeight: 176,
    }
    async  componentDidMount() {
        const res = await window.Fetch({ url: 'http://localhost:8000/point/mobile' })
        this.setState({
            data: res.data.banner
        })
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
                </PageComponent>
                <PointExchangeArea/>
            </div>

        )
    }
}

