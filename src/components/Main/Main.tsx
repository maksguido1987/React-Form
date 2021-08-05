/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import MainLeftField from './MainLeftField';
import MainRightField from './MainRightField';
import './main.scss';
import { IAddCardData, ICardData, IStateApp } from '../../interfaces';

export default class Main extends Component<IAddCardData, IStateApp> {
  constructor(props: IAddCardData) {
    super(props);
    this.state = {
      cardData: [],
    };
  }

  onAddCardData = (data: ICardData) => {
    const { cardData } = this.state;
    const newCardData = cardData.slice();
    newCardData.push(data);
    this.setState({ cardData: newCardData });
  };

  render() {
    const { cardData } = this.state;
    return (
      <main className="main">
        <MainLeftField addCardData={this.onAddCardData} />
        <MainRightField appState={cardData} />
      </main>
    );
  }
}
