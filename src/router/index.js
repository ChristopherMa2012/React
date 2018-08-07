import React, { Component } from "react"
import { BrowserRouter } from "react-router-dom"
import RouteEntry from "./routes"
// import BottomBar from '@com/bottom-bar/index'
import { injectGlobal, ThemeProvider } from 'styled-components'

injectGlobal`
 font-family:'PingFangSC';
`

class Router extends Component {
    render() {
        return (
            <BrowserRouter basename="/chris">
                <ThemeProvider theme={{ color: '#4690E9' }}>
                    <RouteEntry />
                </ThemeProvider>
            </BrowserRouter>
        )
    }
}

export default Router;