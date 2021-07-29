import React, { FC } from 'react';
import './form.scss';

const Form: FC = () => {
  return (
    <form className="form">
      <fieldset>
        <legend>React Form</legend>
        <div className="form-group">
          <label htmlFor="staticName" className="col-sm-2 col-form-label example-label">
            Name:
            <div className="col-sm-10">
              <input type="text" className="form-control-plaintext" id="staticName" value="Mikle" />
            </div>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputName" className="form-label mt-3">
            Name
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
            />
            <small id="emailHelp" className="form-text text-muted">
              We will never share your data with anyone else.
            </small>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputLastName" className="form-label mt-3">
            Last Name
            <input
              type="text"
              className="form-control"
              id="exampleInputLastName"
              placeholder="Last Name"
            />
          </label>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
