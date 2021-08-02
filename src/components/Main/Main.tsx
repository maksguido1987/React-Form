import React, { FC } from 'react';
import MainLeftField from './MainLeftField';
import MainRightField from './MainRightField';
import './main.scss';
import { ICardData } from '../../interfaces';

const Main: FC<ICardData> = (props) => {
  return (
    <main className="main">
      <MainLeftField />
      <MainRightField />
    </main>
  );
};

export default Main;
