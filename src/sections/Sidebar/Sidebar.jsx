import {useContext} from 'react';
import {Button} from '../../ui/Button';
import {Icon} from '../../ui/Icon';
import {ThemeSwitch} from '../../components/ThemeSwitch';
import {CitySearch} from '../../components/CitySearch';
import {CityContext, LoadingContext, WeatherContext} from '../../model';
import {Loader} from '../../components/Loader';
import './Sidebar.css';
import {capitalizeFirstLetter} from '../../utils/capitalizeFirstLetter';
import {addSign} from '../../utils/addSign';
import {formatDate} from '../../utils/formatDate';

export function Sidebar() {
  const cityContext = useContext(CityContext);
  const {isLoading} = useContext(LoadingContext);
  const {value: weather} = useContext(WeatherContext);
  function openSearch() {
    document.querySelector('.city-search').classList.add('city-search--open');
  }
  return (
    <section className="sidebar">
      <div className="sidebar__container">
        <CitySearch blockName={'sidebar'} />
        <div className="sidebar__header">
          <Button blockName={'sidebar'} className={'city-search-btn'} onClick={openSearch}>
            {'Поиск города'}
          </Button>
          <ThemeSwitch />
        </div>
        <img
          className="sidebar__precipitation-img"
          src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
          alt={weather.description}
          loading="lazy"
        />
        <div className="sidebar__data">
          <span className="sidebar__temp temp">
            {weather.temp} <span className="temp__label">°C</span>
          </span>
          <span className="sidebar__precipitation-text">
            {capitalizeFirstLetter(weather.description)}
          </span>
          <span className="sidebar__feeling">{`Ощущается как ${addSign(
            weather.feels_like
          )} °C`}</span>
          <div className="sidebar__date date">
            <span className="date__when">Сегодня</span>
            <span className="date__value">{formatDate(Date.now())}</span>
          </div>
          <div className="sidebar__location location">
            <Icon name={'location'} blockName={'location'} />
            <span className="location__city">{cityContext.value.name}</span>
          </div>
        </div>
        {isLoading && <Loader />}
      </div>
    </section>
  );
}
