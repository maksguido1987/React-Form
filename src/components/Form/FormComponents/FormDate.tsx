/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { ICardData } from '../../../interfaces';

export default class FormDate extends Component<{}, ICardData> {
  constructor(props: ICardData) {
    super(props);
    this.state = {
      date: '',
    };
  }

  onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ date: e.target.value });
  };

  render() {
    const { date } = this.state;
    return (
      <div className="form-group">
        <label htmlFor="exampleInputLastName" className="form-label mt-3">
          Year of birth
          <input
            onChange={this.onDateChange}
            value={date}
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
