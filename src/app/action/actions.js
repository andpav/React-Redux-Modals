'use strict';

import * as ActionTypes from './action-types';

export const showModal = (id) => {
  return {
    type: ActionTypes.SHOW_MODAL,
    payload: id,
  };
};

export const hideModal = () => {
  return {
    type: ActionTypes.HIDE_MODAL,
  };
};

export const setStoreName = (storeName) => {
  return {
    type: ActionTypes.SET_STORENAME,
    payload: storeName,
  };
};

export const setEmail = (email) => {
  return {
    type: ActionTypes.SET_EMAIL,
    payload: email,
  };
};

export const login = (username, password) => {
  return {
    type: ActionTypes.LOGIN,
    payload: { username, password },
  };
};

export const logged = (credentials) => {
  return {
    type: ActionTypes.LOGGED,
    payload: credentials,
  };
};

export const authErr = () => {
  return {
    type: ActionTypes.AUTH_ERR,
    payload: 'Authentication error',
  };
};
