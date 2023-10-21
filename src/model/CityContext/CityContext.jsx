import {createContext} from 'react';

export const defaultCity = {name: 'Москва', lat: '55.7504461', lon: '37.6174943'};

export const CityContext = createContext({
  value: defaultCity,
  setValue: () => {},
});
