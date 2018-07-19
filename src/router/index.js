import React,{Component} from "react"
import {BrowserRouter,Route,Link} from "react-router-dom"




class Router extends Component{
    render(){
        return (
            <BrowserRouter>
                 <Route path="/ma" component={Ma}/>
                 <Route path="/li" component={Li}/>
                 <Route path="/ming" component={Ming}/>
            </BrowserRouter>
            
        )
    }
}
