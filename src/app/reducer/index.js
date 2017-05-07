'use strict';

import {combineReducers} from 'redux';
import * as ActionTypes from '../action/action-types';

const modalInitialState = {
  isShowingGoToStoreModal: false,
  isShowingSignInModal: false,
  isShowingForgotPasswordModal: false,
};

const modal = (state = modalInitialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_MODAL:
      return Object.assign({}, modalInitialState,  {
        [action.payload]: true,
      });
    case ActionTypes.HIDE_MODAL:
      return modalInitialState;
    default:
      return state;
  }
};

const dataInitialState = {
  storeName: '',
  email: '',
};

const data = (state = dataInitialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_STORENAME:
      return Object.assign({}, state,  {
        storeName: action.payload,
      });
    case ActionTypes.SET_EMAIL:
      return Object.assign({}, state,  {
        email: action.payload,
      });
    default:
      return state;
  }
};

export default combineReducers({
  modal,
  data
});
