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
