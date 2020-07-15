import React, { Component,PureComponent } from 'react'
import RegularComponent from './RegularComponent'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

 class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Abhishek'
        }
    }
   componentDidMount(){
       setInterval(()=> {
           this.setState({name:'Abhishek'})
        },2000)
   } 
    render() {
        console.log('**********Parent Component Render ***********')
        return (
            <div>
                Parent Component
                {/* <RegularComponent name={this.state.name}/> */}
                {/* <PureComp name={this.state.name}/> */}
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default Parent
