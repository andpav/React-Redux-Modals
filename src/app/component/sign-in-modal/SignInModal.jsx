'use strict';

import React from 'react';
import './styles.css';

export default class SignInModal extends React.PureComponent {
  constructor(props)  {
    super(props);

    this.state = {
      isInvalid: false,
    };

    this.isInvalidPrompt = this.isInvalidPrompt.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    if (this.input.checkValidity()) {
      if ((this.refs.email.value !== 'abc@abc') && (this.refs.password.value !== 'abc')) {
        this.setState({ isInvalid: true });
      } 


      //this.input.reset();
    }
  }

  isInvalidPrompt() {
    if (this.state.isInvalid) return (
      <div>
        The username and/or password is invalid.
      </div>
    );
    
    return;
  }

  render() {
    return (
      <form className="modalForm" ref={input => this.input = input}>
        <h2>Sign In to Shoptiques store</h2>
        <div className="">
          <span>Hi, Zalando Ltd.</span>
          <span>Not your store?</span>
        </div>
        <div>
          { this.isInvalidPrompt() }
        </div>
        <div>         
          <div>Email or username</div>
          <input name="email" type="email" ref="email" required/>
        </div>
        <div>
          <div>Password</div>
          <input name="password" type="password" ref="password" required/>
        </div>
        <button onClick={() => {
          this.props.showModal('isShowingForgotPasswordModal')
        }}>Forgot password?
        </button>
        <button onClick={() => {
          this.onSubmit();
        }}>Sign In
        </button>
      </form>
    );
  }
}