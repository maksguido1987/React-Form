/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { IStateRadio, IPropsRadio } from '../../../interfaces';

export default class RadioButtons extends Component<IPropsRadio, IStateRadio> {
  constructor(props: IPropsRadio) {
    super(props);
    this.state = {
      isAgree: false,
    };
  }

  onCheckAgree = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checkValidAgree } = this.props;
    const { isAgree } = this.state;
    if (e.target.checked) {
      this.setState({ isAgree: true });
    }
    checkValidAgree(isAgree);
  };

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
