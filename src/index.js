import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';
import { requestTodos, getTodos } from './actions';

store.dispatch(getTodos());
store.dispatch(requestTodos());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));
