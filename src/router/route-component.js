import React, { Component } from 'react'
import Loadable from "react-loadable"
import Loading from "@/common/loading"
import { Switch, Route } from "react-router-dom"

const Index = Loadable({
    loader: () => import("@com/bottom-bar"),
    loading: Loading
})


export default class RouteSet extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/chris" component={Index} />
            </Switch>
        )
    }
}
