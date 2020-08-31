import { createStore } from 'redux';

const initState = {
  page: '/'
}

const reducer = (state = initState, action: { type: string, payload: any }) => {
  const { type, payload } = action;
  switch (type) {
    case 'SWITCH_PAGE':
      return { ...state, page: payload }
    default:
      return state;
  }
};

export const store = createStore(reducer, initState);

// action
export const switchPage = (pagePath: string) => {
  return {type: 'SWITCH_PAGE', payload: pagePath}
}