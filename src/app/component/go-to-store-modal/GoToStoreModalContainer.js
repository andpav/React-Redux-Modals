'use strict';

import {connect} from 'react-redux';
import * as Actions from '../../action/actions';
import GoToStoreModal from './GoToStoreModal';

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
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
    setStoreName: (storeName) => {
      dispatch(Actions.setStoreName(storeName));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoToStoreModal);