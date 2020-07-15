import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             topic:'react'
        }
    }
    handleUsername = (event) =>{
        this.setState({
            username:event.target.value
           
        })
    }
    handleComments = (event) =>{
        this.setState({
            comments:event.target.value
        })
    }
    handleTopic = (event) =>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit = (event) =>{
        console.log(`${this.state.username} || ${this.state.comments} ||| ${this.state.comments}`)
        event.preventDefault();
    }
    render() {
        const {username,comments,topic} = this.state
        return (
            <div>
                <h1>Form Component</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label>UserName</label>
                    <input type='text' value={username} onChange={this.handleUsername}/>
                    </div>
                    <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handleComments}></textarea>
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={topic} onChange={this.handleTopic}>
                            <option value='react'>React</option>
                            <option value='angular'>angular</option>
                            <option value='vue'>vue</option>
                        </select>
                    </div>
                    <button type='submit'>Submit Data</button>
                </form>
            </div>
        )
    }
}

export default Form
