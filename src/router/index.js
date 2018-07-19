import React, { Component } from "react"
import { BrowserRouter } from "react-router-dom"
import RouteArray from "./route-component"
import BottomBar from '@com/bottom-bar/bottom-bar'


class Router extends Component {
    render() {
        return (
            <BrowserRouter basename="/chris">
                <div>
                    <BottomBar/>
                    <RouteArray />
                </div>
            </BrowserRouter>
        )
    }
}

export default Router;