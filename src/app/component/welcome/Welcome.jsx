'use strict';

import React from 'react';
import GoToStoreModal from '../go-to-store-modal/GoToStoreModalContainer';
import SignInModal from '../sign-in-modal/SignInModalContainer';
import ForgotPasswordModal from '../forgot-password-modal/ForgotPasswordModalContainer';
import ModalRoot from '../modal-root/ModalRootContainer';
import './styles.css';

export default class Welcome extends React.PureComponent {
  render() {
    return (
      <div className="welcome">
        <button
          className="welcome-button"
          onClick={() => this.props.showModal('isShowingGoToStoreModal')}>
          <span>SIGN IN</span>
        </button>
        <ModalRoot/>
      </div>
    );
  }
}
