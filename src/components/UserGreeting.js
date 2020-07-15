import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
        return this.state.isLoggedIn && <div>Welcome Abhishek</div>
        // return(
        //     this.state.isLoggedIn ?
        //     (<div>Welcome Abhishek</div>):
        //     (<div>Welcome Guest</div>)
        // )
        // let message;
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Abhishek</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }
        // return(
        // <div>{message}</div>
        // )
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome Abhishek</div>
        //     )
        // }else{
        //     return (
        //         <div>
        //            Welcome Guest !! 
        //         </div>
                 
        //     )
        // }
        
    }
}

export default UserGreeting
