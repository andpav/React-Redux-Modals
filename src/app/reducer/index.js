'use strict';

import {combineReducers} from 'redux';
import * as ActionTypes from '../action/action-types';

const initialState = {
  isShowingGoToStoreModal: false,
  isShowingSignInModal: false,
  isShowingForgotPasswordModal: false,
}

const modal = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_MODAL:
      return Object.assign({}, initialState,  {
        [action.payload]: true,
      })
    case ActionTypes.HIDE_MODAL:
      return initialState
    default:
      return state
  }
}

export default combineReducers({
  modal,
})
