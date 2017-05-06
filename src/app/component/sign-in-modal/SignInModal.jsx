'use strict';

import React from 'react';
import './styles.css';

export default class SignInModal extends React.PureComponent {
  constructor(props)  {
    super(props);

    this.state = {
      isInvalid: false,
      isLoginSuccessful: false,
    };

    this.isInvalidPrompt = this.isInvalidPrompt.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    if (this.input.checkValidity()) {
      if ((this.refs.email.value !== 'asd@asd') || (this.refs.password.value !== 'asd')) { // refactor
        this.setState({ isInvalid: true });
      } else {
        this.setState({ isLoginSuccessful: true });
      }
    }
    
    return;
  }

  isInvalidPrompt() {
    if (this.state.isInvalid) return (
      <div className="signIn-invalid">
        <span className="signIn-invalidText">
          The username and/or password is invalid
        </span>
      </div>
    );

    return;
  }

  successful() {
    const storeName = this.props.data.storeName;

    if (this.state.isLoginSuccessful) return (
      <div className="signIn-modalSection>">
        <span className="signIn-store">You were successfully registered.</span>
      </div>
    );
    return (
      <div className="">
        <div className="signIn-modalSection signIn-modalSection_spaceBetween signIn-modalSection_padding6">
          <span className="signIn-store">Hi, {storeName} Ltd.</span>
          <span className="signIn-store">Not your store?</span>
        </div>
        <hr className="signIn-storeLine" />
        <div className="signIn-modalSection signIn-modalSection_start signIn-modalSection_padding6">         
          <span className="signIn-inputDescription">Email or username</span>
        </div>
        <div className="signIn-modalSection signIn-modalSection_start">
          <input onClick={() => this.setState({ isInvalid: false })} className="signIn-input" name="email" ref="email" required/>
        </div>
        <div className="signIn-modalSection signIn-modalSection_start signIn-modalSection_padding6">
          <span className="signIn-inputDescription">Password</span>
        </div>
        <div className="signIn-modalSection signIn-modalSection_start">
          <input onClick={() => this.setState({ isInvalid: false })} className="signIn-input" name="password" type="password" ref="password" required/>
        </div>
        <div className="signIn-modalSection">
          { this.isInvalidPrompt() }
        </div>
        <div className="signIn-modalSection signIn-modalSection_spaceBetween signIn-modalSection_padding6">
          <a className="signIn-forgotPassword" onClick={() => {
            this.props.showModal('isShowingForgotPasswordModal')
            this.props.setEmail(this.refs.email.value)
          }}>Forgot password?
          </a>
          <button className="signIn-button" onClick={(e) => {
            e.preventDefault();
            this.onSubmit();
          }}>
            <span className="signIn-buttonText">Sign In</span>
          </button>
        </div>
      </div>    
    );
  }

  render() {
    return (
      <form className="signIn-modalForm" ref={input => this.input = input}>
        <div className="picture" />
        <div className="signIn-modalZoneSignIn">
          <h2 className="signIn-modalHeader">Sign In to Shoptiques store</h2>
          { this.successful() }
        </div>
        <div className="signIn-modalZoneClose">
          <a
            className="close"
            onClick={() => this.props.hideModal()}>
            &times;
          </a>
        </div>
      </form>
    );
  }
}