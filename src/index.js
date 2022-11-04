import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware} from 'redux';
import {Provider} from'react-redux';
import {logger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './store/index';
import Main from './screens/main';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Main />
  </Provider>
);


