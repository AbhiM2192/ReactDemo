import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello Event Bind'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message:'Goodbye Event Bind'
        })
    }
    clickHandlerArrow = () =>{
        this.setState({
            message:'GoodBye Arrow Event Bind'
        })
    }
    render() {
        return (
            <div>
              <div>{this.state.message}</div>  
              <button onClick={this.clickHandler.bind(this)}>ClickEvent Bind1</button>
              <button onClick={() => this.clickHandler()}>ClickEvent Bind2</button>
              <button onClick={this.clickHandler}>ClickEvent Bind3</button>  
              <button onClick={this.clickHandlerArrow}>ClickEvent Bind4</button>
            </div>
        )
    }
}

export default EventBind
