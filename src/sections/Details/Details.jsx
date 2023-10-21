import {useContext} from 'react';
import {getId} from '../../utils/getId';
import {DetailsFeature} from '../../components/DetailsFeature';
import './Details.css';
import {WeatherContext} from '../../model';

export function Details() {
  const {value: weather} = useContext(WeatherContext);
  return (
    <section className="details">
      <div className="details__container container">
        <h2 className="details__title title">Подробно на сегодня</h2>
        <ul className="details__items items">
          {[
            <DetailsFeature
              title={'Скорость ветра'}
              value={weather.wind.speed}
              unit={'м/с'}
              modifier={'wind-speed'}
              args={{direction: weather.wind.deg}}
              key={getId()}
            />,
            <DetailsFeature
              title={'Влажность'}
              value={weather.humidity}
              unit={'%'}
              modifier={'humidity'}
              key={getId()}
            />,
            <DetailsFeature
              title={'Видимость'}
              value={weather.visibility}
              unit={'км'}
              modifier={'visibility'}
              key={getId()}
            />,
            <DetailsFeature
              title={'Давление'}
              value={weather.pressure}
              unit={'мм рт. ст.'}
              modifier={'pressure'}
              key={getId()}
            />,
          ].map(el => (
            <li className="details__item" key={el.key}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
