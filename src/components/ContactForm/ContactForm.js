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
        sending: false,
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
        this.setState({sending: true, successfulSend: false});
        let postURL = window.location.origin.toString() + "/send";
        // if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        //     postURL = "http://localhost:3002/send";
        // }
        // if (process.env.NODE_ENV === 'production') {
        //     postURL = "https://sheltered-sands-87315.herokuapp.com/send"
        // }

        e.preventDefault();
        console.log(this.state);
        try {
            axios({
                method: "POST",
                url: postURL,
                data: this.state
            }).then((response)=>{
                if (response.data.status === 'success') {
                    // alert("Message Sent.");
                    this.setState({sending: false, successfulSend: true});
                    this.resetForm();
                } else if (response.data.status === 'fail') {
                    // alert("Message failed to send.");
                    this.setState({sending: false, errorSending: true});
                }
            })
            .catch((err)=>{
                this.setState({sending: false, errorSending: true});
            });
        } catch {
            this.setState({sending: false, errorSending: true});
        }
        
    }

    resetForm() {
        this.setState({name: "", email: "", message: ""})
    }

    renderSending() {
        if (this.state.sending) {
            return(
                <div className="successful-send-text">
                    Sending...
                </div>
            );
        }
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
                    <button type="submit" className="form-submit-button">submit.</button>
                </form>
                {this.renderSending()}
                {this.renderSuccessfulSend()}
                {this.renderFailedSend()}
            </div>
        );
    }
  
    
}
  
export default App;