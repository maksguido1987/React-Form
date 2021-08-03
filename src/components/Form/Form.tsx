/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { ICardData } from '../../interfaces';
import './form.scss';
import Checkbox from './FormComponents/Checkbox';
import FormDate from './FormComponents/FormDate';
import FormSelect from './FormComponents/FormSelect';
import Name from './FormComponents/Name';
import Submit from './FormComponents/Submit';
import Switcher from './FormComponents/Switcher';

export default class Form extends Component<ICardData> {
  constructor(props: ICardData) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      date: '',
      contry: 'Russia',
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { addCardData } = this.props;
    addCardData({});
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>React Form</legend>
          <Name />
          <FormDate />
          <FormSelect />
          <div className="check-wrapper">
            <div className="check-left">
              <Switcher />
              <Checkbox />
            </div>
            <div className="check-right">
              <Submit />
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}
