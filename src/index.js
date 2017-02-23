import 'whatwg-fetch';
import 'es6-promise';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './scss/dovebox.scss';

import store from './store';
import DoveApp from './doveapp';
import Container from './container';

ReactDOM.render(
  <Provider store={store}>
    <DoveApp>
      <Container />
    </DoveApp>
  </Provider>,
  document.querySelector('#app')
);


