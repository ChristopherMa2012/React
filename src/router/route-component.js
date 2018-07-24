import React, { Component } from 'react'
import Loadabel from "react-loadable"
import Loading from "@/common/loading"
import { Route } from "react-router-dom"

const Ma = Loadabel({
    loader: () => import('@com/ma'),
    loading: Loading
})
const SubPage = Loadabel({
    loader:()=>import('@com/ma/subPage'),
    loading:Loading
})
const Li = Loadabel({
    loader: () => import('@com/li'),
    loading: Loading
})

const Ming = Loadabel({
    loader: () => import('@com/ming'),
    loading: Loading
})


class RouteSet extends Component {
    render() {
        return (
            <div>
                <Route path="/ma" component={Ma} />
                <Route path="/li" component={Li} />
                <Route path="/ming" component={Ming} />
                <Route path="/ma/2012" component={SubPage}/>
            </div>
        )
    }
}
export default RouteSet;