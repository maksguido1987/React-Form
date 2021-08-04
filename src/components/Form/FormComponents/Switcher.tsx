/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { IStateSwitcher, IPropsSwitcher } from '../../../interfaces';

export default class Switcher extends Component<IPropsSwitcher, IStateSwitcher> {
  constructor(props: IPropsSwitcher) {
    super(props);
    this.state = {
      skills: [],
    };
  }

  onCheckSkill = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { skills } = this.state;
    const { onCheckSkill } = this.props;
    const newState = skills.slice();
    const checkElem = newState.includes(e.target.value);
    if (!checkElem) {
      newState.push(e.target.value);
      this.setState({ skills: newState });
      onCheckSkill(newState);
    } else if (checkElem) {
      const newArr = newState.filter((item) => item !== e.target.value);
      this.setState({ skills: newArr });
      onCheckSkill(newArr);
    }
  };

  render() {
    return (
      <>
        <div className="form-check form-switch">
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              value="React"
              onChange={this.onCheckSkill}
            />
            I know React
          </label>
        </div>
        <div className="form-check form-switch">
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
              value="Vue"
              onChange={this.onCheckSkill}
            />
            I know Vue
          </label>
        </div>
        <div className="form-check form-switch">
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              value="Angular"
              onChange={this.onCheckSkill}
            />
            I know Angular
          </label>
        </div>
      </>
    );
  }
}
