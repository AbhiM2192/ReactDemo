import React, { Component } from 'react'

 class User extends Component {
    render() {
        return (
            <div>
               Abhishek  - {this.props.render(true)}
            </div>
        )
    }
}

export default User
