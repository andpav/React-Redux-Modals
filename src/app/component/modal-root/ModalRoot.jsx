import React from 'react';
import GoToStoreModal from '../go-to-store-modal/GoToStoreModalContainer';
import SignInModal from '../sign-in-modal/SignInModalContainer';
import ForgotPasswordModal from '../forgot-password-modal/ForgotPasswordModalContainer';
import './styles.css';

export default class ModalRoot extends React.PureComponent {
  render() {
  	const {isShowingGoToStoreModal, isShowingSignInModal, isShowingForgotPasswordModal } = this.props.modal;
    return (
      (isShowingGoToStoreModal || isShowingSignInModal || isShowingForgotPasswordModal) && <div>
        <div className="modal">
          <div className="modal-content">
            {isShowingGoToStoreModal && <GoToStoreModal/>}
            {isShowingSignInModal && <SignInModal/>}
            {isShowingForgotPasswordModal && <ForgotPasswordModal/>}
          </div>
        </div>
      </div>
    );
  }
}
