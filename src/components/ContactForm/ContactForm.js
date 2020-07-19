import React, { Component } from 'react';
import axios from 'axios';

import './ContactForm.scss';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        email: "",
        message: "",
        successfulSend: false,
        errorSending: false,
      }
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);

        axios({
            method: "POST",
            url: "http://localhost:3002/send",
            data: this.state
        }).then((response)=>{
            if (response.data.status === 'success') {
                // alert("Message Sent.");
                this.setState({successfulSend: true});
                this.resetForm();
            } else if (response.data.status === 'fail') {
                // alert("Message failed to send.");
                this.setState({errorSending: true});
            }
        })
    }

    resetForm() {
        this.setState({name: "", email: "", message: ""})
    }

    renderSuccessfulSend() {
        if (this.state.successfulSend) {
            return(
                <div className="successful-send-text">
                    Message Sent Successfully!
                </div>
            );
        }
    }

    renderFailedSend() {
        if (this.state.errorSending) {
            return(
                <div className="error-sending-text">
                    Message Failed to Send.
                </div>
            );
        }
    }  

    render() {

        return(
            <div className="contact-form-container">
                <form className="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="name-form-group">
                        {/* <label htmlFor="name">Name</label> */}
                        <input type="text" className="form-input" value={this.state.name} onChange={this.onNameChange.bind(this)} placeholder="Name"/>
                    </div>
                    <div className="email-form-group">
                        {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
                        <input type="email" className="form-input" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} placeholder="Email Address"/>
                    </div>
                    <div className="message-form-group">
                        {/* <label htmlFor="message">Message</label> */}
                        <textarea className="form-input-message" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} placeholder="Message"/>
                    </div>
                    <button type="submit" className="form-submit-button">Submit</button>
                </form>
                {this.renderSuccessfulSend()}
                {this.renderFailedSend()}
            </div>
        );
    }
  
    
}
  
export default App;