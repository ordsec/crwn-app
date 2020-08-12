import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

// pages/components
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInSignUp from './pages/sign-in-sign-up/signInSignUp.component';

// firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// redux
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends Component {
  unsubscribeFromAuth = null;

  // enable user session persistence
  componentDidMount() {
    const { setCurrentUser } = this.props;
    // this is a subscription. the callback
    // takes a function where the argument
    // is the user auth state. this allows 
    // the user to stay signed in, and the app
    // always knows who signed in last.
    // it returns a function we can call
    // to unsubscribe and prevent memory leaks
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        // try to persist the user and get the user object back
        const userRef = await createUserProfileDocument(userAuth);

        // listen to user data changes
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
            exact 
            path='/signin' 
            render={
              () => currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInSignUp />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

// get access to current user in order to
// render the sign-in/sign-up conditionally
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

// get access to the setCurrentUser action
// to fire once a user logs in
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);