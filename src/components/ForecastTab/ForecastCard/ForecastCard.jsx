import {useContext} from 'react';
import {Loader} from '../../../components/Loader';
import {LoadingContext} from '../../../model';
import './ForecastCard.css';

export function ForecastCard({title, description, icon, period, temp}) {
  const {isLoading} = useContext(LoadingContext);
  console.log(isLoading);
  console.log(description);
  return (
    <article className={`forecast__forecast-card forecast-card forecast-card--${period}`}>
      <h3 className="forecast-card__time">{title}</h3>
      <img
        className="forecast-card__img"
        alt={description}
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      {period === 'daily' ? (
        <div className="forecast-card__temp">
          <span className="forecast-card__average-temp">{`${temp.average}°C`}</span>
          <span className="forecast-card__min-temp">{`${temp.min}°C`}</span>
        </div>
      ) : (
        <span className="forecast-card__temp">{`${temp}°C`}</span>
      )}
      {isLoading && <Loader />}
    </article>
  );
}
