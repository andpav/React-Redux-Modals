'use strict';

import React from 'react';
import GoToStoreModal from '../go-to-store-modal/GoToStoreModalContainer';
import SignInModal from '../sign-in-modal/SignInModalContainer';
import ForgotPasswordModal from '../forgot-password-modal/ForgotPasswordModalContainer';
import ModalRoot from '../modal-root/ModalRootContainer';
import './styles.css';

export default class Welcome extends React.PureComponent {
  constructor(props) {
    super(props); // delete, refactor
  }

  render() {
    return (
      <header className="welcomeTitle">
        <button
          className=""
          onClick={() => this.props.showModal('isShowingSignInModal')}>
          Sign In
        </button>
        <ModalRoot/>
      </header>
    );
  }
}
