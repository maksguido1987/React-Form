/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { IPropsSubmit, IStateSubmit } from '../../../interfaces';

export default class Submit extends Component<IPropsSubmit, IStateSubmit> {
  constructor(props: IPropsSubmit) {
    super(props);
    this.state = {
      stateButton: true,
    };
  }

  render() {
    const { onCheckValid } = this.props;
    const { stateButton } = this.state;
    if (onCheckValid) {
      this.setState({ stateButton: false });
    }
    return (
      <button type="submit" className="btn btn-primary" disabled={stateButton}>
        Submit
      </button>
    );
  }
}
