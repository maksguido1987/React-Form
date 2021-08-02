import { FC } from 'react';
import { ICardData } from '../../interfaces';
import './card.scss';

const Card: FC<ICardData> = (props) => {
  const { name, lastName, date, skills } = props;
  return (
    <div className="card text-white bg-primary mb-3">
      <div className="card-header">
        {name} {lastName}
      </div>
      <div className="card-body">
        <p className="card-text">{`Year of birth: ${date}`}</p>
        <p className="card-text">{`Skills: ${skills}`}</p>
      </div>
    </div>
  );
};

export default Card;
