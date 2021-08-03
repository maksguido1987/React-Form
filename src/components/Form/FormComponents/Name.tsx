/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { ICardData, IPropsName } from '../../../interfaces';

export default class Name extends Component<IPropsName, ICardData> {
  constructor(props: IPropsName) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
    };
  }

  onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onAddNameForm } = this.props;
    onAddNameForm(e.target.value);
    this.setState({
      name: e.target.value,
    });
  };

  onLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  render() {
    const { name, lastName } = this.state;
    return (
      <>
        <div className="form-group">
          <label htmlFor="exampleInputName" className="form-label mt-3">
            Name
            <input
              onChange={this.onNameChange}
              value={name}
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
              onChange={this.onLastNameChange}
              value={lastName}
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
