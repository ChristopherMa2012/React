import React, { Component } from 'react'
import { Route } from "react-router-dom"
import RouteItem from './route-component'



export default class RoutesEntry extends Component {
    render() {
        return (
            <Route path="/" render={() => <RouteItem />} />
        )
    }
}
