'use strict';

import React from 'react';
import './styles.css';

export default class GoToStoreModal extends React.PureComponent {
  render() {
    return (
      <form className="go-to-store-modal">
        <div className="go-to-store-modal__zone">
          <div className="go-to-store-modal-section go-to-store-modal-section_justify-content-start">
            <h2 className="go-to-store-modal-header">Go to your Shoptiques store</h2>
          </div>
          <div className="go-to-store-modal-section">
            <input className="go-to-store-modal-input" ref="store" placeholder="Your store address" />
            <div className="go-to-store-modal-address">
              <span className="go-to-store-modal-address__text">.shoptiquespos.com</span>
            </div>
          </div>
          <div className="go-to-store-modal-section">
            <button className="go-to-store-modal-button" onClick={(e) => {
              e.preventDefault();
              if (this.refs.store.value !=='') {
                this.props.setStoreName(this.refs.store.value);
                this.props.showModal('isShowingSignInModal');
              }
            }}>
              <span className="go-to-store-modal-button__text">GO TO MY STORE</span>
            </button>
          </div>
          <div className="go-to-store-modal-section go-to-store-modal-section_padding-20">
            <a className="go-to-store-modal-link" onClick={(e) => {
              e.preventDefault();
              this.props.showModal('isShowingForgotPasswordModal');
            }}>Forgot password?
            </a>
          </div>
        </div>
        <div className="go-to-store-modal__zone">
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