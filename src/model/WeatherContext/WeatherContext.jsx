import {createContext} from 'react';

export const defaultWeather = {
  description: '',
  icon: '02d',
  temp: 0,
  feels_like: 0,
  wind: {speed: 0, deg: 0},
  humidity: 0,
  visibility: 0,
  pressure: 0,
  forecast: {
    daily: [],
    hourly: [],
  },
};

export const WeatherContext = createContext({
  value: defaultWeather,
  setValue: () => {},
});
