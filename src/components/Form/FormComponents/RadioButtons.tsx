/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class RadioButtons extends Component {
  render() {
    return (
      <>
        <div className="form-check">
          <label className="form-check-label" htmlFor="optionsRadios1">
            <input
              type="radio"
              className="form-check-input"
              name="optionsRadios"
              id="optionsRadios1"
              checked
            />
            I don&apos;t agree to data processing
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="optionsRadios2">
            <input
              type="radio"
              className="form-check-input"
              name="optionsRadios"
              id="optionsRadios2"
            />
            I agree to data processing
          </label>
        </div>
      </>
    );
  }
}
