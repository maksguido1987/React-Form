/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { IAddCardData, ICardData } from '../../interfaces';
import './form.scss';
import Checkbox from './FormComponents/Checkbox';
import FormDate from './FormComponents/FormDate';
import FormSelect from './FormComponents/FormSelect';
import Name from './FormComponents/Name';
import Submit from './FormComponents/Submit';
import Switcher from './FormComponents/Switcher';

export default class Form extends Component<IAddCardData, ICardData> {
  constructor(props: IAddCardData) {
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
    addCardData(this.state);
  };

  onAddName = (value: string) => {
    this.setState({ name: value });
  };

  render() {
    const { name, lastName, date, contry } = this.state;
    window.state = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>React Form</legend>
          <Name onAddNameForm={this.onAddName} />
          <FormDate date={date} />
          <FormSelect contry={contry} />
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
