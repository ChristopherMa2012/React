/*
 * @Author: chris 
 * @Date: 2018-08-14 16:23:15 
 * @Last Modified by:   chris 
 * @Last Modified time: 2018-08-14 16:23:15 
 */

import * as React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Icon, Title, PlaceHolder, Text, P, UL, LI } from '../atom_element'
import { inject } from '../../node_modules/mobx-react';

const PageInit = {
    headerHeight: 44,
    footerHeight: 49,
    pagePadding: 12
}


const Header = styled.section`
    width:100%;
    height:${PageInit.headerHeight}px;
    padding:0 ${PageInit.pagePadding}px;
    box-sizing:border-box;
    margin:0;
    position:fixed;
    left:0;
    top:0;
    z-index:10;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
export const PageFooter = styled.section`
    width:100%;
    padding:0;
    margin: 0;
    position:fixed;
    left:0;
    bottom: 0;
    z-index:10;
`

export const Page = styled.section`
    padding: 0;
    margin:0;
    width:100%;
    min-height:100%;
    position:relative;
`

export const PageBody = styled.section`    
    width:100%;
    padding:0;
    margin:0;
    position:absolute;
    left: 0;
    top: ${PageInit.headerHeight}px;
    min-height: calc(100% - ${PageInit.headerHeight}px);
    z-index:1;
`

export const PageComponent = styled.section`
  ${({ subClass }) => subClass}
`



@withRouter
@inject(({ store }) => ({
    indexTitle: store.IndexStore.indexTitle
}))
export class PageHeader extends React.Component {
    render() {
        const { indexTitle, HeaderRight, history, showBackBtn } = this.props
        return (
            <Header>
                <Icon
                    width="16"
                    height="16"
                    url={require('../assets/images/header/icon-arrow-left@2x.png')}
                    onClick={() => history.go(-1)}
                    style={{ visibility: showBackBtn ? 'visible' : 'hidden' }}
                />
                <Title color="#202020" size="18" aligh="center" weight="400">{indexTitle}</Title>
                {
                    (HeaderRight && HeaderRight()) || <PlaceHolder />
                }
            </Header>
        )
    }
}




export function RichText(props) {
    let { textStyleArray, children, style } = props;
    let temArr = children.split('++');
    let resArr = [];
    let styleIndex = 0;
    temArr.forEach((item, index) => {
        if (item === '') return null;
        if (!item.includes('--')) {
            resArr.push(item);
            return;
        }
        let tem = item.split('--');
        resArr.push(<Text key={index} display="inline-block" style={textStyleArray[styleIndex++]}>{tem[0]}</Text>);
        resArr.push(tem[1]);
    })
    return (<P style={style}> {resArr}</P>)
}


export class Table extends React.Component {
    render() {
        const { headerData, bodyData,headerStyle} = this.props;
        return (
            <section>
                <UL>
                    {
                        headerData && headerData.map((item, index) => (
                            <LI key={index}  style={{flex: `1 1 ${1 / headerData.length * 100}%` }}>
                                <Title style={headerStyle}>{item}</Title>
                            </LI>
                        ))
                    }
                </UL>
                <UL>
                    {
                        bodyData && bodyData.map((item, index) => (
                            <LI key={index} display="flex" width="100%" style={{ justifyContent: 'space-around' }}>
                                {
                                    item.map((subItem, index) => {
                                        return (
                                            <Text key={index} align="center" style={{ flex: `0 0 ${1 / item.length * 100}%` }}>
                                                {subItem}
                                            </Text>
                                        )

                                    })
                                }
                            </LI>
                        ))
                    }
                </UL>
            </section>
        )
    }
}