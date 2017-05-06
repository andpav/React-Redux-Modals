'use strict';

import * as ActionTypes from './action-types';

export const showModal = (id) => {
  return {
    type: ActionTypes.SHOW_MODAL,
    payload: id,
  }
}

export const hideModal = () => {
  return {
    type: ActionTypes.HIDE_MODAL,
  }
}

export const setStoreName = (storeName) => {
  return {
    type: ActionTypes.SET_STORENAME,
    payload: storeName,
  }
}

export const setEmail = (email) => {
  return {
    type: ActionTypes.SET_EMAIL,
    payload: email,
  }
}
