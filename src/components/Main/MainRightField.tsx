import React, { FC } from 'react';
import { ICardDataArray } from '../../interfaces';
import Card from '../Card/Card';

const MainRightField: FC<ICardDataArray> = (props) => {
  const { appState } = props;
  const cards = appState.map((item, index) => {
    return (
      <Card
        key={index.toString()}
        name={item.name}
        lastName={item.lastName}
        date={item.date}
        country={item.country}
        skills={item.skills}
        nameError={item.nameError}
        lastNameError={item.lastNameError}
        dateError={item.dateError}
        isAgree={item.isAgree}
      />
    );
  });
  return <div className="right-main-container">{cards}</div>;
};

export default MainRightField;
