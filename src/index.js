import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'normalize.css';
import './css/main.scss';

const initialState = {
  categories: ['General', 'Business'],
  newsData: [],
  isLoaded: false,
  activeCategory: 'general',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'categories':
      return { categories: state.categories };
    case 'newsData':
      return { newsData: state.newsData };
    case 'activeCategory':
      return { activeCategory: state.activeCategory };
    case 'isLoaded':
      return { isLoaded: state.isLoaded };
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
