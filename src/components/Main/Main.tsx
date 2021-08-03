/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import MainLeftField from './MainLeftField';
import MainRightField from './MainRightField';
import './main.scss';
import { ICardData, ICardDataState } from '../../interfaces';

export default class Main extends Component<ICardData, ICardDataState> {
  constructor(props: ICardData) {
    super(props);
    this.state = {
      cardData: [],
    };
  }

  onAddCardData = (data: ICardData) => {
    const { cardData } = this.state;
    cardData.push(data);
  };

  render() {
    return (
      <main className="main">
        <MainLeftField />
        <MainRightField />
      </main>
    );
  }
}
