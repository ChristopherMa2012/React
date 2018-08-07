import React, { Component } from 'react'
import Loadabel from "react-loadable"
import Loading from "@/common/loading"
import {Switch,Route } from "react-router-dom"

const Index = Loadabel({
    loader: import("@com/bottom-bar"),
    loading: Loading
})


class RouteSet extends Component {
    render() {
        return (
            <Switch className="router">
                <Route exact path="/" Component={Index} />
                <Route exact path="/chris" Component={Index} />
            </Switch>
        )
    }
}
export default RouteSet;