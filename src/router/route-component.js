import React, { Component } from 'react'
import Loadabel from "react-loadable"
import Loading from "@/common/loading"
import { Route } from "react-router-dom"

const CreditExchange = Loadabel({
    loader: import("@com/credit-exchange"),
    loading: Loading
})
console.log(CreditExchange);
class RouteSet extends Component {
    render() {
        return (
            <div>
                <Route path="/credit-exchange" Component={CreditExchange} />
            </div>
        )
    }
}
export default RouteSet;