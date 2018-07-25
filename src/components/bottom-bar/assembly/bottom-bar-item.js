import React, { Component } from 'react'
import styled from 'styled-components'
// import { withRouter } from 'react-router-dom'

const TabBarItem = styled.section`
 
`


const Item = styled.section`
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


// @withRouter
class BottomBarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curTabIndex: 0
        }
    }
    itemAction(index) {
        this.setState({
            curTabIndex: index
        })
        console.log(index);
    }

    render() {
        const { style, text, index, children } = this.props;
        console.log('子', children);
        return (
            <div>
                <TabBarItem>
                    <Item onClick={() => this.itemAction(index)}>
                        <i style={style}></i>
                        <div>{text}</div>
                    </Item>
                </TabBarItem>
            </div>
        )
    }
}

export default BottomBarItem;