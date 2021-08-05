/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { IPropsRadio } from '../../../interfaces';

export default class RadioButtons extends Component<IPropsRadio> {
  onCheckAgree = () => {
    const { checkValidAgree } = this.props;
    checkValidAgree(true);
  };

  onCheckDoNotAgree = () => {
    const { checkValidAgree } = this.props;
    checkValidAgree(false);
  };

  render() {
    return (
      <>
        <div className="form-check">
          <label className="form-check-label" htmlFor="optionsRadios1">
            <input
              onChange={this.onCheckDoNotAgree}
              type="radio"
              className="form-check-input"
              name="optionsRadios"
              id="optionsRadios1"
              defaultChecked
            />
            I don&apos;t agree to data processing
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="optionsRadios2">
            <input
              onChange={this.onCheckAgree}
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
