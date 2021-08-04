/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { ICardData } from '../../interfaces';
import './card.scss';

const Card: FC<ICardData> = (props) => {
  const { name, lastName, date, country, skills } = props;
  const el = skills.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  return (
    <div className="card text-white bg-secondary mb-3">
      <div className="card-header">
        {name} {lastName}
      </div>
      <div className="card-body">
        <p className="card-text">{`Year of birth: ${date}`}</p>
        <p className="card-text">{`Country: ${country}`}</p>
        <ul className="card-list">Skills :{el}</ul>
      </div>
    </div>
  );
};

export default Card;
