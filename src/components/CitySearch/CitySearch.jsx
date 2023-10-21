import {useState, useEffect, useRef, useContext} from 'react';
import {IconButton} from '../../ui/IconButton';
import {Alert} from '../Alert';
import {searchCity, updateCity} from '../../model/actions';
import {Icon} from '../../ui/Icon';
import {getId} from '../../utils/getId';
import {CityContext, LoadingContext, WeatherContext} from '../../model';
import './CitySearch.css';

export function CitySearch({blockName}) {
  const el = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState(null);
  const cityContext = useContext(CityContext);
  const [cityHistory, setCityHistory] = useState([]);
  const loadingContext = useContext(LoadingContext);
  const {setValue: setWeather} = useContext(WeatherContext);

  function close() {
    el.current.classList.remove('city-search--open');
  }

  async function onSubmit(event) {
    event.preventDefault();
    setError(null);
    if (!searchValue.trim()) return setError('Для поиска введите город');

    searchCity(
      searchValue.trim(),
      cityContext.value,
      cityContext.setValue,
      cityHistory,
      setCityHistory,
      loadingContext.setIsLoading,
      setWeather,
      message => {
        setError(message);
      },
      () => {
        setSearchValue('');
        close();
      }
    );
  }

  useEffect(() => {
    const history = JSON.parse(window.localStorage.getItem('city-history'));
    if (history) setCityHistory(history);
  }, []);

  useEffect(() => {
    el.current.classList.remove('prevent-transition');
  }, [el]);

  return (
    <div className={`${blockName}__city-search city-search prevent-transition`} ref={el}>
      <IconButton
        blockName={'city-search'}
        className={'close-btn'}
        ariaLabel={'Закрыть поиск'}
        icon={'cross'}
        onClick={close}
      />
      <form className="city-search__search-form" onSubmit={onSubmit}>
        <div className="city-search__search-field">
          <svg
            className="city-search__search-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M17.2916 15.8816L11.7316 10.3216C12.8616 8.77163 13.3616 6.74163 12.7116 4.58163C12.0316 2.35163 10.1416 0.601626 7.86163 0.141626C6.80059 -0.0833671 5.70015 -0.0397302 4.66026 0.268573C3.62037 0.576877 2.67398 1.14008 1.90703 1.90703C1.14008 2.67398 0.576877 3.62037 0.268573 4.66026C-0.0397302 5.70015 -0.0833671 6.80059 0.141626 7.86163C0.601626 10.1516 2.35163 12.0416 4.58163 12.7116C6.74163 13.3616 8.77163 12.8616 10.3216 11.7316L15.8816 17.2916C16.0686 17.4786 16.3222 17.5836 16.5866 17.5836C16.8511 17.5836 17.1046 17.4786 17.2916 17.2916C17.4786 17.1046 17.5836 16.8511 17.5836 16.5866C17.5836 16.3222 17.4786 16.0686 17.2916 15.8816ZM2.00163 6.50163C2.00163 4.01163 4.01163 2.00163 6.50163 2.00163C8.99163 2.00163 11.0016 4.01163 11.0016 6.50163C11.0016 8.99163 8.99163 11.0016 6.50163 11.0016C4.01163 11.0016 2.00163 8.99163 2.00163 6.50163Z"
              fill="#ACACAC"
            />
          </svg>
          <input
            className="city-search__input"
            type="search"
            placeholder="Введите город"
            value={searchValue}
            onChange={event => setSearchValue(event.currentTarget.value)}
          />
        </div>
        <button className="city-search__search-btn btn">Найти</button>
      </form>
      <ul className="city-search__city-history city-history items">
        {cityHistory.map(el => (
          <li className="city-history__item" key={getId()}>
            <button
              className={
                'city-history__btn' +
                (cityContext.value.name === el ? ' city-history__btn--active' : '')
              }
              onClick={() => {
                updateCity(
                  el,
                  cityContext.setValue,
                  loadingContext.setIsLoading,
                  setWeather,
                  close,
                  message => setError(message)
                );
              }}
            >
              <span className="city-history__city-name">{el}</span>
              <Icon name={'arrow'} blockName={'city-history'} />
            </button>
          </li>
        ))}
      </ul>
      {error && <Alert message={error} type={'error'} closeFunction={() => setError(null)} />}
    </div>
  );
}
