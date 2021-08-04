/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { IAddCardData, ICardData } from '../../interfaces';
import './form.scss';
import FormDate from './FormComponents/FormDate';
import FormSelect from './FormComponents/FormSelect';
import Name from './FormComponents/Name';
import Submit from './FormComponents/Submit';
import Switcher from './FormComponents/Switcher';
import RadioButtons from './FormComponents/RadioButtons';

export default class Form extends Component<IAddCardData, ICardData> {
  constructor(props: IAddCardData) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      date: '',
      country: 'Russia',
      skills: [],
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { addCardData } = this.props;
    addCardData(this.state);
  };

  onAddName = (name: string) => {
    this.setState({ name });
  };

  onAddLastName = (lastName: string) => {
    this.setState({ lastName });
  };

  onAddDate = (date: string) => {
    this.setState({ date });
  };

  onAddContry = (country: string) => {
    this.setState({ country });
  };

  onAddSkill = (value: string[]) => {
    this.setState({ skills: value });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <fieldset>
          <Name onAddNameForm={this.onAddName} onAddLastNameForm={this.onAddLastName} />
          <FormDate onAddDateForm={this.onAddDate} />
          <FormSelect onAddContryForm={this.onAddContry} />
          <div className="check-wrapper">
            <div className="check-left">
              <Switcher onCheckSkill={this.onAddSkill} />
              <RadioButtons />
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
