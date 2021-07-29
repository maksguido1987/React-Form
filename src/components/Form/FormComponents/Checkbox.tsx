/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Checkbox extends Component {
  render() {
    return (
      <div className="form-check">
        <label className="form-check-label" htmlFor="flexCheckDefault">
          <small id="emailHelp" className="form-text text-muted">
            I agree to data processing
          </small>
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        </label>
      </div>
    );
  }
}
