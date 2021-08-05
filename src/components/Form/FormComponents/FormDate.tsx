/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { IStateDate, IPropsDate } from '../../../interfaces';

export default class FormDate extends Component<IPropsDate, IStateDate> {
  constructor(props: IPropsDate) {
    super(props);
    this.state = {
      date: '',
      checkFocusDate: false,
      dateError: false,
    };
  }

  onCheckFocusDate = () => {
    this.setState({ checkFocusDate: true });
  };

  onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onAddDateForm, checkValidDate } = this.props;
    const { dateError } = this.state;
    onAddDateForm(e.target.value);
    this.setState({ date: e.target.value });
    if (e.target.value) {
      this.setState({ dateError: true });
    }
    checkValidDate(dateError);
  };

  render() {
    const { date, checkFocusDate, dateError } = this.state;
    const blockElement: React.CSSProperties = { display: 'block' };
    const noneElement: React.CSSProperties = { display: 'none' };
    return (
      <div className="form-group">
        <label htmlFor="exampleInputLastName" className="form-label mt-3">
          Year of birth
          <input
            onChange={this.onDateChange}
            onFocus={this.onCheckFocusDate}
            value={date}
            type="date"
            className="form-control"
            id="exampleInputLastName"
            placeholder="Last Name"
          />
          {checkFocusDate && (
            <div className="valid-feedback" style={dateError ? blockElement : noneElement}>
              Success! You&apos;ve done it.
            </div>
          )}
          {checkFocusDate && (
            <div className="invalid-feedback" style={!dateError ? blockElement : noneElement}>
              Sorry, that date taken. Try another?
            </div>
          )}
        </label>
      </div>
    );
  }
}
