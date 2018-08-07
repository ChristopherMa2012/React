import React, { Component } from "react"
import { BrowserRouter } from "react-router-dom"
<<<<<<< HEAD
import RouteEntry from "./routes"
// import BottomBar from '@com/bottom-bar/index'
import { injectGlobal, ThemeProvider } from 'styled-components'
=======
import RouteSet from "./route-component"
// import BottomBar from '@com/bottom-bar/index'
import { injectGlobal,ThemeProvider } from 'styled-components'
>>>>>>> 07e5dcb8a2640a950eee88325cbadeac2bfd52c3

injectGlobal`
 font-family:'PingFangSC';
`

class Router extends Component {
    render() {
        return (
<<<<<<< HEAD
            <BrowserRouter basename="/chris">
                <ThemeProvider theme={{ color: '#4690E9' }}>
                    <RouteEntry />
=======
            <BrowserRouter basename="/">
                <ThemeProvider theme={{ color: '#4690E9' }}>
                        {/* <BottomBar/> */}
                        <RouteSet/>
>>>>>>> 07e5dcb8a2640a950eee88325cbadeac2bfd52c3
                </ThemeProvider>
            </BrowserRouter>
        )
    }
}

export default Router;