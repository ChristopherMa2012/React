import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'


const BarItem = styled.section`
width: 80px;
height:45px;
padding:0 10px;
text-align: center;
i{
    display:block;
    margin: 0 auto;
    width:27px;
    height:27px;
}
div{
   font-size:10px;
   color:#999999;
}
`


@withRouter
class BottomBarItem extends Component {
    itemAction(index) {
        const { history } = this.props;
        console.log(history);
        switch (index) {
            case 0:
                history.push('/credit-exchange');
                break;
            default:
                console.log('结束')
        }
        return;
    }

    render() {
        const { style, text, index } = this.props;
        return (
            <BarItem onClick={() => this.itemAction(index)}>
                <i style={style}></i>
                <div>{text}</div>
            </BarItem>
        )
    }
}

export default BottomBarItem;