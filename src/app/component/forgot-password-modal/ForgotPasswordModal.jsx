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
      <div className="forgotPw-modalSection">
        <span className="forgotPw-store">
          Thank you. An email has just been sent to your inbox.
        </span>
      </div>
    );

    return (
      <div>
        <div className="forgotPw-modalSection">
          <span className="forgotPw-inputDescription"> 
            If your forgot your password simply enter your email address and we'll send you a link to reset your password.
          </span> 
        </div>
        <div className="forgotPw-modalSection">
          <input value={this.props.data.email} className="forgotPw-input"></input>
        </div>
        <div className="forgotPw-modalSection">
          <button className="forgotPw-button" onClick={() => {
            this.setState({ isSuccessful: true });
            }}>
            <span className="forgotPw-buttonText">SEND RESET PASSWORD EMAIL</span>
          </button>
        </div>
      </div>  
    );
  }
  
  render() {
    return (
      <form className="forgotPw-modalForm" ref={input => this.input = input}>
        <div className="picture" />
        <div className="forgotPw-modalZoneForgotPw">
          <h2 className="forgotPw-modalHeader">Forgot your password?</h2>
          {this.successful()}
        </div>
        <div className="forgotPw-modalZoneClose">
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
