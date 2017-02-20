import 'whatwg-fetch';
import 'es6-promise';
import React from 'react';
import ReactDOM from 'react-dom';

import './scss/dovebox.scss';

import Container from './container';

ReactDOM.render(
  <Container />,
  document.querySelector('#app')
);
