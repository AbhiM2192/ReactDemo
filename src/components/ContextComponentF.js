import React, { Component } from 'react'
import { UserConsumer } from './userContext'

 class ContextComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (userName) => {
                    return <div>Hello {userName} from Context</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ContextComponentF
