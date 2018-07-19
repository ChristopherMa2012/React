import React, { Component } from 'react'
import Loadabel from "react-loadable"
import Loading from "@/common/loading"
import { Route } from "react-router-dom"

const Ma = Loadabel({
    loader: () => import('@com/ma'),
    loading: Loading
})

const Li = Loadabel({
    loader: () => import('@com/li'),
    loading: Loading
})

const Ming = Loadabel({
    loader: () => import('@com/ming'),
    loading: Loading
})


class RouteArray extends Component {
    render() {
        return (
            <div>
                <Route path="/ma" component={Ma} />
                <Route path="/li" component={Li} />
                <Route path="/ming" component={Ming} />
            </div>
        )
    }
}
export default RouteArray;