/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class FormSelect extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="exampleSelect1" className="form-label mt-4">
          Select a country
          <select className="form-select" id="exampleSelect1">
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
