'use strict';

import React from 'react';
import './styles.css';

export default class ForgotPasswordModal extends React.PureComponent {
  constructor(props)  {
    super(props);

    this.state = {
      isSuccessful: false,
    };

    this.successful = this.successful.bind(this);
  }

  successful() {
    if (this.state.isSuccessful) return (
      <div className="forgot-pw-modal__zone-forgot-pw">
        <div className="forgot-pw-modal-section forgot-pw-modal-section_justify-content-start">
          <h2 className="forgot-pw-modal-header">Forgot your password?</h2>
        </div>
        <div className="forgot-pw-modal-section">
          <span className="forgot-pw-modal-label">
            Thank you. An email has just been sent to your inbox.
          </span>
        </div>
      </div>
    );

    return (
      <div className="forgot-pw-modal__zone-forgot-pw">
        <div className="forgot-pw-modal-section forgot-pw-modal-section_justify-content-start">
          <h2 className="forgot-pw-modal-header">Forgot your password?</h2>
        </div>
        <div className="forgot-pw-modal-section">
          <span className="forgot-pw-modal-input-description"> 
            If your forgot your password simply enter your email address and we'll send you a link to reset your password.
          </span> 
        </div>
        <div className="forgot-pw-modal-section forgot-pw-modal-section_padding-4">
          <input value={this.props.data.email} className="forgot-pw-modal-input"></input>
        </div>
        <div className="forgot-pw-modal-section forgot-pw-modal-section_padding-4">
          <button className="forgot-pw-modal-button" onClick={() => {
            this.setState({ isSuccessful: true });
          }}>
            <span className="forgot-pw-modal-button__text">SEND RESET PASSWORD EMAIL</span>
          </button>
        </div>
      </div>  
    );
  }
  
  render() {
    return (
      <form className="forgot-pw-modal">
        <div className="forgot-pw-modal-picture" />
        {this.successful()}
        <div className="forgot-pw-modal__zone-close">
          <a
            className="close"
            onClick={() => {
              this.props.hideModal();
              this.props.setStoreName('');
              this.props.setEmail('');
            }
            }>
            &times;
          </a>
        </div>   
      </form>
    );
  }
}
