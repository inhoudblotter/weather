import {useContext} from 'react';
import {LoadingContext} from '../../model';
import {Loader} from '../Loader';
import {HumidityBar} from './HumidityBar';
import {WindDirection} from './WindDirection';
import './DetailsFeature.css';

export function DetailsFeature({title, value, unit, modifier, args}) {
  const {isLoading} = useContext(LoadingContext);

  return (
    <article className={`details__feature feature feature--${modifier}`}>
      <h3 className="feature__title">{title}</h3>
      <div className="feature__value-container">
        <span className="feature__value">{value}</span>
        <span className="feature__unit">{unit}</span>
      </div>
      {modifier === 'wind-speed' && <WindDirection value={args.direction} />}
      {modifier === 'humidity' && <HumidityBar value={value} />}
      {isLoading && <Loader />}
    </article>
  );
}
