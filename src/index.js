import './index.scss';
import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';

render((
  <div>
    <Header />
  </div>
), document.getElementById('root'));
