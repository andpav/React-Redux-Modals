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
    if ((this.refs.email.value !== 'asd@asd') || (this.refs.password.value !== 'asd')) { // refactor
      this.setState({ isInvalid: true });
    } else {
      this.setState({ isLoginSuccessful: true });
    }
    
    return;
  }

  isInvalidPrompt() {
    if (this.state.isInvalid) return (
      <div className="sign-in-modal-warning">
        <span className="sign-in-modal-warning__text">
          The username and/or password is invalid
        </span>
      </div>
    );

    return;
  }

  successful() {
    const storeName = this.props.data.storeName;

    if (this.state.isLoginSuccessful) return (
      <div className="sign-in-modal__zone-sign-in">
        <div className="sign-in-modal-section sign-in-modal-section_justify-content-start">
          <h2 className="sign-in-modal-header">Sign In to Shoptiques store</h2>
        </div>
        <div className="sign-in-modal-section sign-in-modal-section_justify-content-start">
          <span className="sign-in-modal-label">You were successfully registered.</span>
        </div>
      </div>
    );
    return (
      <div className="sign-in-modal__zone-sign-in">
        <div className="sign-in-modal-section sign-in-modal-section_justify-content-start">
          <h2 className="sign-in-modal-header">Sign In to Shoptiques store</h2>
        </div>
        <div className="sign-in-modal-section sign-in-modal-section_justify-content-space-between sign-in-modal-section_padding-6">
          <span className="sign-in-modal-label">Hi, {storeName} Ltd.</span>
          <span className="sign-in-modal-label">Not your store?</span>
        </div>
        <hr className="sign-in-modal-line" />
        <div className="sign-in-modal-section sign-in-modal-section_justify-content-start sign-in-modal-section_padding-6">         
          <span className="sign-in-modal-input-description">Email or username</span>
        </div>
        <div className="sign-in-modal-section sign-in-modal-section_justify-content-start">
          <input onClick={() => this.setState({ isInvalid: false })} className="sign-in-modal-input" name="email" ref="email" required/>
        </div>
        <div className="sign-in-modal-section sign-in-modal-section_justify-content-start sign-in-modal-section_padding-6">
          <span className="sign-in-modal-input-description">Password</span>
        </div>
        <div className="sign-in-modal-section sign-in-modal-section_justify-content-start">
          <input onClick={() => this.setState({ isInvalid: false })} className="sign-in-modal-input" name="password" type="password" ref="password" required/>
        </div>
        <div className="sign-in-modal-section">
          { this.isInvalidPrompt() }
        </div>
        <div className="sign-in-modal-section sign-in-modal-section_justify-content-space-between sign-in-modal-section_padding-6">
          <a className="sign-in-modal-link" onClick={() => {
            this.props.showModal('isShowingForgotPasswordModal');
            this.props.setEmail(this.refs.email.value);
          }}>Forgot password?
          </a>
          <button className="sign-in-modal-button" onClick={(e) => {
            e.preventDefault();
            this.onSubmit();
          }}>
            <span className="sign-in-modal-button__text">Sign In</span>
          </button>
        </div>
      </div>    
    );
  }

  render() {
    return (
      <form className="sign-in-modal">
        <div className="sign-in-modal-picture" />
        { this.successful() }
        <div className="sign-in-modal__zone-close ">
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