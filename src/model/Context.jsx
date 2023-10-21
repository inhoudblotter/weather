import {useEffect, useState} from 'react';
import {CityContext, LoadingContext, defaultCity, defaultWeather, setCity, loadWeather} from '.';
import {WeatherContext} from './WeatherContext';

export function Context({onError, children}) {
  const [currentCity, setCurrentCity] = useState(defaultCity);
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState(defaultWeather);

  useEffect(() => {
    let city = window.localStorage.getItem('city');
    if (city) {
      city = JSON.parse(city);
      if (city.name) setCity(city, setCurrentCity);
    } else {
      city = defaultCity;
    }
    loadWeather(city, setWeather, () => setIsLoading(false), onError);
  }, [onError]);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('prevent-events');
    } else document.body.classList.remove('prevent-events');
  }, [isLoading]);

  return (
    <CityContext.Provider value={{value: currentCity, setValue: setCurrentCity}}>
      <LoadingContext.Provider value={{isLoading, setIsLoading}}>
        <WeatherContext.Provider value={{value: weather, setValue: setWeather}}>
          {children}
        </WeatherContext.Provider>
      </LoadingContext.Provider>
    </CityContext.Provider>
  );
}
