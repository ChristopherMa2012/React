<<<<<<< HEAD
import React, { Component } from 'react'

class Loading extends Component {
    render() {
        const { error } = this.props
        if (error) {
            return <div>error</div>
        } else {
            return (
                <div>loading</div>
            )
        }
=======
import React,{Component} from 'react'

class Loading extends Component{
    render(){
        return (
            <div>loading</div>
        )
>>>>>>> 07e5dcb8a2640a950eee88325cbadeac2bfd52c3
    }
}

export default Loading