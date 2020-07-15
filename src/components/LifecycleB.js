import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Abhishek'
        }
        console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Life B getDerivestaefromProps');
        return null
    }
    componentDidMount(){
        console.log('Lifecycle B componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('lifecycle B ShouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate Lifecycle B')
        return null
    }
    componentDidUpdate(){
        console.log('componentDidUpdate Lifecycle B')
    }
    render() {
        console.log('Lifecycle B Render')
        return (
            <div>
               Lifecycle B 
            </div>
        )
    }
}

export default LifecycleB
