import React, { Component } from 'react'
import './MainView.css';
import axios from 'axios';
import coffee_line from '../../assets/desktop_assets/coffee_line.png';
import submit from '../../assets/desktop_assets/submit.png';


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
        axios.post('https://naleesportfolio.herokuapp.com/main', {contactInfo})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
  render() {
    return (
        <div>
          <div className = 'contact_form'>
            <div className = 'contact_form_center'>
              <div className = 'contact_form_header'>
                <div className = 'contact_form_header_title'>
                  Contact
                </div>
                <div className = 'contact_form_header_via'>
                    through form or email
                </div>
                <div className = 'contact_form_header_email'>
                  nr10@albion.edu
                </div>
              </div>

              <img src = {coffee_line} className='coffee_line_img' alt = 'line'/>

                <form className = 'form' onSubmit ={this.onSubmit}>
                  <label>
                      <div className= 'form_name'>Name:</div>
                      <input type='text' name='name' onChange={this.onChangeName} className= 'input_name'/>
                  </label>
                  <label>
                    <div className= 'form_email'>Email:</div>
                    <input type='text' name='email' onChange={this.onChangeEmail} className= 'input_email'/>

                  </label>
                  <label>
                    <div className = 'form_message'>Message:</div>
                    <textarea type='text' name='message' onChange={this.onChangeMessage} className= 'input_message'/>
                  </label>

                  <button type='submit'><img src = {submit} className='submitbutton' alt = 'submit'/></button>
                </form>
              </div>
          </div>
        </div>
    )
  }
}
