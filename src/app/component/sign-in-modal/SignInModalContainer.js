'use strict';

import {connect} from 'react-redux';
import * as Actions from '../../action/actions';
import SignInModal from './SignInModal';

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
    data: state.data,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInModal);