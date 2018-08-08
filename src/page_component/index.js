import * as React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Icon, Title, PlaceHolder } from '../atom_element'

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
export class PageHeader extends React.Component {
    render() {
        const { title, HeaderRight, history, showBackBtn } = this.props
        return (
            <Header>
                <Icon
                    width="16"
                    height="16"
                    url={require('../assets/images/header/icon-arrow-left@2x.png')}
                    onClick={() => history.go(-1)}
                    style={{ visibility: showBackBtn ? 'visible' : 'hidden' }}
                />
                <Title color="#202020" size="18" aligh="center" weight="400">{title}</Title>
                {
                    (HeaderRight && HeaderRight()) || <PlaceHolder />
                }
            </Header>
        )
    }
}