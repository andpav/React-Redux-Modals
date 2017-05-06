'use strict';

import React from 'react';
import './styles.css';

export default class GoToStoreModal extends React.PureComponent { //refactor
  render() {
    return (
      <form className="modalForm" ref={input => this.input = input}>
        <h2>Go to your Shoptiques store</h2>
        <div>
          <input placeholder="Your store address" />
          <span>.shoptiquespos.com</span>
        </div>
        <button onClick={() => {
          this.props.showModal('isShowingSignInModal')
        }}>GO TO MY STORE
        </button>
        <button onClick={() => {
          this.props.showModal('isShowingForgotPasswordModal')
        }}>Forgot password?
        </button>
      </form>
    
    );
  }
}