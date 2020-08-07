import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cartDropdown.component';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
      {
        // if the user is signed in, display 'sign out' link
        currentUser ? (
          <div 
            className='option'
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </div> 
        ) : (
          <Link className='option' to='/signin'>SIGN IN</Link>
        )
      }
      <CartIcon />
    </div>
    <CartDropdown />
  </div>
);

// state is the top-level root reducer
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);