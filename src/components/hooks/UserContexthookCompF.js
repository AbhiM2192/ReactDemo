import React,{useContext} from 'react'
import {UserContextHook,ChannelContextHook} from '../../App'

function UserContexthookCompF() {
    const user = useContext(UserContextHook)
    const channel = useContext(ChannelContextHook)
    return (
        <div>
           <h2>{user}</h2>
            <h4>{channel}</h4> 
        </div>
    )
}

export default UserContexthookCompF
