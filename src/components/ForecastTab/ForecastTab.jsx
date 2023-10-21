import {useContext} from 'react';
import {Slider} from '../Slider';
import {WeatherContext} from '../../model';
import {formatDate} from '../../utils/formatDate';
import {formatTime} from '../../utils/formatTime';
import {ForecastCard} from './ForecastCard';

export function ForecastTab({currentTab}) {
  const {
    value: {forecast},
  } = useContext(WeatherContext);

  const items = forecast[currentTab].map((el, i) => (
    <ForecastCard
      title={
        currentTab === 'daily' ? (i === 0 ? 'Завтра' : formatDate(el.date)) : formatTime(el.date)
      }
      description={el.description}
      icon={el.icon}
      period={currentTab}
      temp={el.temp}
      key={i}
    />
  ));

  if (!items.length) {
    for (let i = items.length; i < 6; ++i) {
      items.push(
        <ForecastCard
          title={formatTime(Date.now())}
          description={''}
          icon={'03n'}
          period={'blank'}
          temp={0}
          key={i}
        />
      );
    }
  }
  return <Slider blockName={'forecast'}>{items}</Slider>;
}
