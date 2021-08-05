/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { IPropsSubmit } from '../../../interfaces';

export default class Submit extends Component<IPropsSubmit> {
  render() {
    const { onCheckValid } = this.props;
    return (
      <button type="submit" className="btn btn-primary" disabled={!onCheckValid}>
        Submit
      </button>
    );
  }
}
