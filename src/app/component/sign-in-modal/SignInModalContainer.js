'use strict';

import { connect } from 'react-redux';
import * as Actions from '../../action/actions';
import SignInModal from './SignInModal';

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
    data: state.data,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (id) => {
      dispatch(Actions.showModal(id));
    },
    hideModal: () => {
      dispatch(Actions.hideModal());
    },
    setEmail: (email) => {
      dispatch(Actions.setEmail(email));
    },
    login: (username, password) => {
      dispatch(Actions.login(username, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInModal);