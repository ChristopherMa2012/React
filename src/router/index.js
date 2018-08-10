import React, { Component } from "react"
import { BrowserRouter } from "react-router-dom"
import RouteEntry from "./routes"
import { injectGlobal, ThemeProvider } from 'styled-components'
import { Provider } from "mobx-react";
import Store from '../store'

injectGlobal`
 font-family:'PingFangSC';
`

class Router extends Component {
    render() {
        return (
            <BrowserRouter basename="/chris">
                <ThemeProvider theme={{ color: '#4690E9' }}>
                    <Provider store={Store} >
                        <RouteEntry />
                    </Provider>
                </ThemeProvider>
            </BrowserRouter>
        )
    }
}

export default Router;