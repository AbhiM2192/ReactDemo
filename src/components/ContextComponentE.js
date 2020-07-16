import React, { Component } from 'react'
import ContextComponentF from './ContextComponentF'
import UserContext from './userContext'

 class ContextComponentE extends Component {
    
    static contextType = UserContext
    render() {
        return (
            <div>
                Component E Context - {this.context}
                <ContextComponentF/>
            </div>
        )
    }
}

export default ContextComponentE
