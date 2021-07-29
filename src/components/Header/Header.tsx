/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './header.scss';

export default class Header extends Component {
  render() {
    return (
      <header className="container header__container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <h2>React Form</h2>
        </nav>
      </header>
    );
  }
}
