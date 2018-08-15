/*
 * @Author: chris 
 * @Date: 2018-08-14 16:22:29 
 * @Last Modified by: chris
 * @Last Modified time: 2018-08-14 16:36:13
 */
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
