import React, { Component } from 'react'
import styled from 'styled-components'

const BarItem = styled.section`
width: 80px;
padding:0 10px;
`
const Item = styled.div`
  text-align: center;
  i{
      display:block;
      width:27px;
      height:27px;
  }
  div{
      
  }
`


class BottomBarItem extends Component {

    render() {
        const { style, text } = this.props;
        return (
            <BarItem>
                <Item>
                    <i style={style}></i>
                    <div>{text}</div>
                </Item>
            </BarItem>
        )
    }
}