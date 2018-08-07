import React, { Component } from 'react'
import Loadable from "react-loadable"
import Loading from "@/common/loading"
import { Switch, Route } from "react-router-dom"

const AppIndex = Loadable({
    loader: () => import("@com/bottom-bar"),
    loading: Loading
})


class RoutesSet extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={AppIndex} />
            </Switch>
        )
    }
}
export default RoutesSet;