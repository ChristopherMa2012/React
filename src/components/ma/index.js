import React, { Component } from "react"
import {Link } from "react-router-dom"

class Ma extends Component {
    render() {
    
        const { match } = this.props;
        return (
            <Link to={`${match.url}/2012`}>
                马的主页
            </Link>
        )
    }
}
export default Ma;