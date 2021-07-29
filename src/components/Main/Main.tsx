import React, { FC } from 'react';
import MainLeftField from './MainLeftField';
import MainRightField from './MainRightField';
import './main.scss';

const Main: FC = () => {
  return (
    <main className="main">
      <MainLeftField />
      <MainRightField />
    </main>
  );
};

export default Main;
