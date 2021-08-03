import React, { FC } from 'react';
import { ICardData } from '../../interfaces';
import './form.scss';
import Checkbox from './FormComponents/Checkbox';
import FormDate from './FormComponents/FormDate';
import FormSelect from './FormComponents/FormSelect';
import Name from './FormComponents/Name';
import Submit from './FormComponents/Submit';
import Switcher from './FormComponents/Switcher';

const Form: FC<ICardData> = () => {
  return (
    <form className="form">
      <fieldset>
        <legend>React Form</legend>
        <Name />
        <FormDate />
        <FormSelect />
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
};

export default Form;
