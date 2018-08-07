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
    }
}

export default Loading