'use strict';

import React from 'react';
import './styles.css';

export default class GoToStoreModal extends React.PureComponent {
  render() {
    return (
      <form className="goToStore-modalForm" ref={input => this.input = input}>
        <div className="goToStore-modalZoneGoToStore">
          <h2 className="goToStore-modalHeader">Go to your Shoptiques store</h2>
          <div>
            <div className="goToStore-modalSection">
              <input className="goToStore-input" ref="store" placeholder="Your store address" />
              <div className="goToStore-addressBackground">
                <span className="goToStore-addressText">.shoptiquespos.com</span>
              </div>
            </div>
          </div>
          <div className="goToStore-modalSection">
            <button className="goToStore-button" onClick={(e) => {
              e.preventDefault();
              if (this.refs.store.value !=='') {
                this.props.setStoreName(this.refs.store.value)
                this.props.showModal('isShowingSignInModal')
              }
            }}>
              <span className="goToStore-buttonText">GO TO MY STORE</span>
            </button>
          </div>
          <div className="goToStore-modalSection goToStore-modalSection_padding20 goToStore-modalSection_justifyCenter">
            <a className="goToStore-forgotPassword" onClick={(e) => {
              e.preventDefault();
              this.props.showModal('isShowingForgotPasswordModal')
            }}>Forgot password?
            </a>
          </div>
        </div>
        <div className="goToStore-modalZoneClose">
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