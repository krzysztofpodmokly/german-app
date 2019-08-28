import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import wordReducer from './store/reducers/wordReducer';
import translationReducer from './store/reducers/translationReducer';
import buttonReducer from './store/reducers/buttonReducer';
import queryReducer from './store/reducers/queryReducer';

import App from './App';
import './index.css';

const rootReducer = combineReducers({
  word: wordReducer,
  translation: translationReducer,
  button: buttonReducer,
  query: queryReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
