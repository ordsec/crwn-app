import React, { Component } from 'react';

import FormInput from '../form-input/formInput.component';
import CustomButton from '../custom-button/customButton.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './signIn.styles.scss';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: '',
        password: ''
      });
    } catch (err) {
      console.error(err);
    }
  }

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            type='email'
            label='Email'
            value={this.state.email} 
            handleChange={this.handleChange}
            required  
          />
          <FormInput 
            name='password' 
            type='password'
            label='Password'
            value={this.state.password}
            handleChange={this.handleChange}
            required  
          />
          <div className='buttons'>
            <CustomButton type='submit'>Heck yea!</CustomButton>
            <CustomButton
              type='button'
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              I want Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}