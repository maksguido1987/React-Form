/* eslint-disable react/prefer-stateless-function */
import React, { Component, FocusEventHandler } from 'react';
import { ICardData } from '../../../interfaces';

export default class FormSelect extends Component<{}, ICardData> {
  constructor(props: ICardData) {
    super(props);
    this.state = {
      contry: '',
    };
  }

  onSelectChange = (e: FocusEventHandler<HTMLSelectElement>) => {
    this.setState({ contry: e.focus });
  };

  render() {
    return (
      <div className="form-group">
        <label htmlFor="exampleSelect1" className="form-label mt-4">
          Select a country
          <select className="form-select" id="exampleSelect1" onFocus={this.onSelectChange}>
            <option>Russia</option>
            <option>Belarus</option>
            <option>USA</option>
            <option>Canada</option>
            <option>China</option>
          </select>
        </label>
      </div>
    );
  }
}
