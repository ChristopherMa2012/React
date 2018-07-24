import React, { Component } from "react"
import { BrowserRouter } from "react-router-dom"
import RouteSet from "./route-component"
import BottomBar from '@com/bottom-bar/index'
import { injectGlobal,ThemeProvider } from 'styled-components'

injectGlobal`
 font-family:'PingFangSC';
`

class Router extends Component {
    render() {
        return (
            <BrowserRouter basename="/chris">
                <ThemeProvider theme={{ color: '#4690E9' }}>
                    <div>
                        <BottomBar />
                        <RouteSet name="zhansan" sex="nan"/>
                    </div>
                </ThemeProvider>
            </BrowserRouter>
        )
    }
}

export default Router;