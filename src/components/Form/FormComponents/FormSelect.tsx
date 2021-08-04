/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { IStateCountry, IPropsCountry } from '../../../interfaces';

export default class FormSelect extends Component<IPropsCountry, IStateCountry> {
  constructor(props: IPropsCountry) {
    super(props);
    this.state = {
      country: 'Russia',
    };
  }

  onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { onAddContryForm } = this.props;
    onAddContryForm(e.target.value);
    this.setState({ country: e.target.value });
  };

  render() {
    const { country } = this.state;
    return (
      <div className="form-group">
        <label htmlFor="exampleSelect1" className="form-label mt-4">
          Select a country
          <select
            className="form-select"
            id="exampleSelect1"
            onChange={this.onSelectChange}
            value={country}
          >
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
