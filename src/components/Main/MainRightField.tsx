import React, { FC } from 'react';
import { ICardData } from '../../interfaces';
import Card from '../Card/Card';

const MainRightField: FC<ICardData> = (props) => {
  const { name, lastName, date, skills } = props;
  return (
    <div className="right-main-container">
      <Card name={name} lastName={lastName} date={date} skills={skills} />
    </div>
  );
};

export default MainRightField;
