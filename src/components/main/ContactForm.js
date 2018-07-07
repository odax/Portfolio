import React, { Component } from 'react'
import './MainView.css';

export default class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: '',
        };
    }

    onChangeName = (event) => {
        this.setState({name: event.target.value});
    }
    onChangeEmail = (event) => {
        this.setState({email: event.target.value});
    }
    onChangeMessage = (event) => {
        this.setState({email: event.target.value});
    }
    onSubmit = (event) => {
        event.preventDefault();
        let id = Math.floor(Math.random() * (10000 - 1 + 1) + 1);
        const contactInfo = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
            id: {id}
        }
        console.log(contactInfo);
    }
  render() {
    return (
        <div>
          <div className = 'contact_form'>
            <div className = 'contact_form_header'>
              <div className = 'contact_form_header_title'>
                Contact
              </div>
              <div className = 'contact_form_header_via'>
                via below or email
              </div>
              <div className = 'contact_form_header_email'>
                nr10@albion.edu
              </div>
            </div>
            <div className = 'contact_line'>
            line
            </div>
              <form className = 'form' onSubmit ={this.onSubmit}>
                <label>
                    <input type='text' name='name' placeholder= 'Name' onChange={this.onChangeName}/>
                </label>
                <label>
                  <input type='text' name='email' placeholder= 'email' onChange={this.onChangeEmail}/>

                </label>
                <label>
                  <input type='text' name='message' placeholder ='message' onChange={this.onChangeMessage}/>
                </label>
                <button type='submit'>Submit</button>
              </form>
          </div>
        </div>
    )
  }
}
