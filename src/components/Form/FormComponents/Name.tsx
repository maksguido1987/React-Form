/* eslint-disable react/prefer-stateless-function */
// fake comment
import React, { Component } from 'react';
import { IStateName, IPropsName } from '../../../interfaces';

export default class Name extends Component<IPropsName, IStateName> {
  constructor(props: IPropsName) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      checkFocusName: false,
      checkFocusLastName: false,
      nameError: false,
      lastNameError: false,
    };
  }

  onFocusCheckValid = (e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'name':
        this.setState({ checkFocusName: true });
        break;
      case 'lastName':
        this.setState({ checkFocusLastName: true });
        break;
      default:
    }
  };

  onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onAddNameForm, checkValidName } = this.props;
    onAddNameForm(e.target.value);
    this.setState({
      name: e.target.value,
    });
    checkValidName(true);
    if (e.target.value.length > 3) {
      this.setState({ nameError: true });
    } else {
      this.setState({ nameError: false });
    }
  };

  onLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onAddLastNameForm, checkValidLastName } = this.props;
    onAddLastNameForm(e.target.value);
    this.setState({
      lastName: e.target.value,
    });
    checkValidLastName(true);
    if (e.target.value.length > 3) {
      this.setState({ lastNameError: true });
    } else {
      this.setState({ lastNameError: false });
    }
  };

  render() {
    const { name, lastName, checkFocusName, checkFocusLastName, nameError, lastNameError } =
      this.state;
    const blockElement: React.CSSProperties = { display: 'block' };
    const noneElement: React.CSSProperties = { display: 'none' };
    return (
      <>
        <div className="form-group has-success">
          <label htmlFor="exampleInputName" className="form-label mt-3">
            Name
            <input
              onChange={this.onNameChange}
              onFocus={this.onFocusCheckValid}
              value={name}
              type="text"
              name="name"
              className="form-control"
              id="exampleInputName"
              placeholder="Enter Name"
            />
            {checkFocusName && (
              <div className="valid-feedback" style={nameError ? blockElement : noneElement}>
                Success! You&apos;ve done it.
              </div>
            )}
            {checkFocusName && (
              <div className="invalid-feedback" style={!nameError ? blockElement : noneElement}>
                Sorry, that username&apos;s taken. Try another?
              </div>
            )}
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
              onFocus={this.onFocusCheckValid}
              value={lastName}
              type="text"
              name="lastName"
              className="form-control"
              id="exampleInputLastName"
              placeholder="Last Name"
            />
            {checkFocusLastName && (
              <div className="valid-feedback" style={lastNameError ? blockElement : noneElement}>
                Success! You&apos;ve done it.
              </div>
            )}
            {checkFocusLastName && (
              <div className="invalid-feedback" style={!lastNameError ? blockElement : noneElement}>
                Sorry, that lastname&apos;s taken. Try another?
              </div>
            )}
          </label>
        </div>
      </>
    );
  }
}
