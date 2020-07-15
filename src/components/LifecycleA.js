import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Abhishek'
        }
        console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Life A getDerivestaefromProps');
        return null
    }
    componentDidMount(){
        console.log('Lifecycle A componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('lifecycle A ShouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate Lifecycle A')
        return null
    }
    componentDidUpdate(){
        console.log('componentDidUpdate Lifecycle A')
    }
    changeState = () =>{
        this.setState({
            name:'Maheshwari'
        })
    }
    render() {
        console.log('Lifecycle A Render')
        return (
            <div>
               Lifecycle A {this.state.name}
               <button onClick={this.changeState}>Change State</button>
               <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
