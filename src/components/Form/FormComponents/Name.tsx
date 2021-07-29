/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Name extends Component {
  render() {
    return (
      <>
        <div className="form-group">
          <label htmlFor="exampleInputName" className="form-label mt-3">
            Name
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
            />
            <small id="emailHelp" className="form-text text-muted">
              We will never share your data with anyone else.
            </small>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputLastName" className="form-label mt-3">
            Last Name
            <input
              type="text"
              className="form-control"
              id="exampleInputLastName"
              placeholder="Last Name"
            />
          </label>
        </div>
      </>
    );
  }
}
