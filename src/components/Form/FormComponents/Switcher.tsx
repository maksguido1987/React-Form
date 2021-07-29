/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Switcher extends Component {
  render() {
    return (
      <>
        <div className="form-check form-switch">
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />I know
            React
          </label>
        </div>
        <div className="form-check form-switch">
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />I know
            Vue
          </label>
        </div>
        <div className="form-check form-switch">
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />I know
            Angular
          </label>
        </div>
      </>
    );
  }
}
