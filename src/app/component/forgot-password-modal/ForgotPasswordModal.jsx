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
      <div>
        Thank you. An email has just been sent to your inbox.
      </div>
    );
    return (
      <div>
        <div> 
          If your forgot your password simply enter your email address and we'll send you a link to reset your password.
        </div>
        <div>
          <input name="" required/>
        </div>
        <button onClick={() => {
          this.setState({ isSuccessful: true });
          }}>SEND RESET PASSWORD EMAIL
        </button>
      </div>  
    );
  }
  
  render() {
    return (
      <form className="modalForm" ref={input => this.input = input}>
        <h2>Forgot your password?</h2>
        {this.successful()}   
      </form>
    );
  }
}
