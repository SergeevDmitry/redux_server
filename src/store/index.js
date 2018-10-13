import { createStore } from 'redux';

import reducer from '../reducers';

function addPromiseSupport(store) {
  const dispatch = store.dispatch;

  return action => {
    if (typeof action.then === 'function') {
      return action.then(dispatch);
    }

    return dispatch(action);
  }
}

function addThunkSupport(store) {
  const dispatch = store.dispatch;

  return action => {
    if (typeof action === 'function') {
      return action(dispatch);
    }

    return dispatch(action);
  }
}

const store = createStore(reducer);

store.dispatch = addThunkSupport(store);

export default store;
