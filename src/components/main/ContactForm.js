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
            messagebox: '',
            messageboxcolor: ''
        };
    }

    onChangeName = (event) => {
        this.setState({name: event.target.value});
    }
    onChangeEmail = (event) => {
        this.setState({email: event.target.value});
    }
    onChangeMessage = (event) => {
        this.setState({message: event.target.value});
    }
    submitChecker = (event) => {
        event.preventDefault();
        if (this.state.name && this.state.email && this.state.message !== '') {
            this.onSubmitSuccess(event);
        } else {
            this.onSubmitFailure();
        }
    }
    onSubmitFailure = () => {
        console.log('Please fill out the whole form before you try sending!');
        this.setState({messagebox: 'Please fill out the all fields and then try submitting again!'});
        this.setState({messageboxcolor: 'red'});
    }
    onSubmitSuccess = (event) => {
        const id = Math.floor(Math.random() * (10000 - 1 + 1) + 1);
        const contactInfo = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
            id
        }
        axios.post('https://naleesportfolio.herokuapp.com/main', contactInfo)
            .then(res => {
                console.log(res);
                this.setState({name: '', email: '', message: '', messagebox: 'Message Sent Successfully!', messageboxcolor: 'green'})
                console.log('message sent!')
            })
            .catch(err => {
                this.setState({messagebox: 'Sorry! There was a problem on the server, message not sent. Try emailing me!'})
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
                <div className = 'contact_form_header_email'>
                  Email: nr10@albion.edu
                </div>
              </div>

              <img src = {coffee_line} className='coffee_line_img' alt = 'line'/>

                <form className = 'form' onSubmit ={this.submitChecker}>
                  <label>
                      <div className= 'form_name'>Name:</div>
                      <input type='text' name='name' onChange={this.onChangeName} className= 'input_name' value={this.state.name}/>
                  </label>
                  <label>
                    <div className= 'form_email'>Email:</div>
                    <input type='text' name='email' onChange={this.onChangeEmail} className= 'input_email' value={this.state.email}/>

                  </label>
                  <label>
                    <div className = 'form_message'>Message:</div>
                    <textarea type='text' name='message' onChange={this.onChangeMessage} className= 'input_message' value={this.state.message}/>
                  </label>
                  <div className= 'button_message'>
                    <button type='submit' class='button'><span>Submit</span></button>
                    <div className= 'messagebox' style = {{color:this.state.messageboxcolor}}>{this.state.messagebox}</div>
                  </div>
                </form>
              </div>
          </div>
        </div>
    )
  }
}
