import React, { Component } from 'react';

import FormInput from '../form-input/formInput.component';
import CustomButton from '../custom-button/customButton.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './signUp.styles.scss';

export default class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  // here we're manually creating a record in firebase
  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      return alert('Passwords don\'t match!');
    }

    try {
      // create user in firebase and get back the user object
      const { user } = await auth.createUserWithEmailAndPassword(
        email, 
        password
      );

      await createUserProfileDocument(user, { displayName });

      // if the profile creation succeeds, clear the form
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (err) {
      console.error(err);
    }
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className='sign-up'>
        <div className='title'>
          <h2>I do not have an account</h2>
          <span>Sign up with your email and password</span>
          <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput
              type='text'
              name='displayName'
              value={displayName}
              handleChange={this.handleChange}
              label='Display Name'
              required
            />
            <FormInput
              type='email'
              name='email'
              value={email}
              handleChange={this.handleChange}
              label='Email'
              required
            />
            <FormInput
              type='password'
              name='password'
              value={password}
              handleChange={this.handleChange}
              label='Password'
              required
            />
            <FormInput
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              handleChange={this.handleChange}
              label='Confirm Password'
              required
            />
            <CustomButton type='submit'>SIGN UP</CustomButton>
          </form>
        </div>
      </div>
    );
  }
}