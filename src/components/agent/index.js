import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import styled from 'styled-components'
import { PageComponent,Table} from '../../page_component'
import { Img, Text, Icon, Title, UL, LI } from '../../atom_element'

const ItemContainer = styled.section`
   width:264px;
   height:164px;
   background:url(${({ bgUrl }) => bgUrl})  no-repeat;
   background-size:contain;
   display:flex;
   justify-content:space-between;
   margin:0 auto;
   position:relative;
`

const LevelRight = styled.section`
   padding:0 20px;
   overflow:hidden;
`
const PriceTable = styled.section`

`

const titleProps = {
    color: "#242424",
    size: "15",
    weight: "400",
    height: "21",
    lineHeight: "21",
    style: {
        margin: '24px 0 16px'
    }
}

class Agent extends Component {

    state = {
        levelData: [],
        levelRight: [],
        tableData:[],
        currentLevel: 0
    }
    async componentDidMount() {
        let res = await window.Fetch({ url: '/point/level' })
        res = res.data;
        const currentLevelData = res.data[res.data.findIndex(item => item.id === res.current_level)];
        this.setState({
            levelData: res.data,
            currentLevel: res.current_level,
            levelRight: currentLevelData.list,
            tableData : currentLevelData.table
        })
    }
    render() {
        const { levelData, levelRight,tableData} = this.state;
        return (
            <PageComponent>
                <WingBlank>
                    <Carousel
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {
                            levelData && levelData.map((item, index) => {
                                return (
                                    <ItemContainer bgUrl={item.pic} key={index}>
                                        <Text
                                            size="22"
                                            lineHeight="30"
                                            height="30"
                                            color="#FFFFFF"
                                            style={{
                                                margin: '37px 0 0 32px'
                                            }}
                                        >{item.name}</Text>
                                        <Icon width="106" height="106" url={item.icon} style={{ margin: '25px 32px 0 0' }} />
                                    </ItemContainer>
                                )
                            })
                        }
                    </Carousel>
                </WingBlank>
                <LevelRight>
                    <Title   {...titleProps}>等级权益</Title>
                    <UL style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between'
                    }}>
                        {
                            levelRight.map((item, index) => (
                                <LI key={index} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flex: '0 0 48%',
                                    marginTop: index > 1 ? '24px' : '0px'
                                }}>
                                    <Icon width="24" height="24" url={item.icon} style={{ marginRight: '8px', flex: '0 0 auto' }} />
                                    <div>
                                        <Title color="#242424" size="15" lineHeight="21">{item.name}</Title>
                                        <Text lineHeight="16" color="#8D8D8D" size="11">{item.note}</Text>
                                    </div>
                                </LI>
                            ))
                        }
                    </UL>
                </LevelRight>
                <PriceTable>
                    <Title {...titleProps}>价格总表</Title>
                    <Table headerData={tableData[0]} bodyData={tableData.slice(1)} headerStyle={{
                        lineHeight:'13px',
                        color:'#7A7A7A',
                        fontSize:'13px',
                        textAlign:'center'
                    }}/>
                </PriceTable>
            </PageComponent>
        )
    }
}

export default Agent;