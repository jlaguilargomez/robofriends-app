import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

// ** Importamos REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { requestRobots, searchRobots } from './redux/reducers';

import 'tachyons';
import './index.css';

const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots})

// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
