'use strict';

import React from 'react';
import ModalRoot from '../modal-root/ModalRootContainer';
import './styles.css';

export default class Welcome extends React.PureComponent {
  render() {
    return (
      <div className="welcome">
        <button
          className="welcome__button"
          onClick={() => this.props.showModal('isShowingGoToStoreModal')}>
          <span>SIGN IN</span>
        </button>
        <ModalRoot/>
      </div>
    );
  }
}
