import React, { FC } from 'react';
import './form.scss';
import Checkbox from './FormComponents/Checkbox';
import FormDate from './FormComponents/FormDate';
import FormSelect from './FormComponents/FormSelect';
import Name from './FormComponents/Name';
import Switcher from './FormComponents/Switcher';

const Form: FC = () => {
  return (
    <form className="form">
      <fieldset>
        <legend>React Form</legend>
        <Name />
        <FormDate />
        <FormSelect />
        <Switcher />
        <Checkbox />
      </fieldset>
    </form>
  );
};

export default Form;
