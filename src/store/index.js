import { createStore, combineReducers } from 'redux';

const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case 'SWITCH_PAGE':
      return { ...state, page: action.payload }
    default:
      return state;
  }
};

const initState = {
  page: '/',
};

export const store = createStore(reducer, initState)

export const switchPage = (page) => {
  return { type: 'SWITCH_PAGE', payload: page }
}
