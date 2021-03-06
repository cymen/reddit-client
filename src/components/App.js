import React from 'react';
import Header from './Header';
import './App.scss';

export default class App extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="app">
        <Header />
        <div>
          {children}
        </div>
      </div>
    );
  }
}
