import React, { FC } from 'react';
import { IAddCardData } from '../../interfaces';
import Form from '../Form/Form';

const MainLeftField: FC<IAddCardData> = (props) => {
  const { addCardData } = props;
  return (
    <div className="left-main-container">
      <Form addCardData={addCardData} />
    </div>
  );
};

export default MainLeftField;
