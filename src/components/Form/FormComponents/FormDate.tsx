/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class FormDate extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="exampleInputLastName" className="form-label mt-3">
          Year of birth
          <input
            type="date"
            className="form-control"
            id="exampleInputLastName"
            placeholder="Last Name"
          />
        </label>
      </div>
    );
  }
}
