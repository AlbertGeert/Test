import React, { Component } from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'welcome visitor',
            naam: 'stranger'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you form subscribing',
            naam: 'Bert'
        })
    }
    render() {
        return (
        <div>
            <h1>{this.state.message} {this.state.naam}</h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
        </div>)



    }
}

export default Message;