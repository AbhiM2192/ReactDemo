import React from 'react'
import {Route,Redirect} from 'react-router-dom';
import FakeAuth from './FakeAuth'

function ProtectedRoute({children,...rest}) {
    console.log({...rest})
    return (
        <Route
        {...rest}
        render={({location}) =>(
            FakeAuth.isAuthenticated ? (children) : (
                <Redirect
                    to={
                        {
                        pathname:'/login',
                        state:{from:location}
                         } 
                    }
                />
            )
        )}
        />
            
        
        
    )
}

export default ProtectedRoute
