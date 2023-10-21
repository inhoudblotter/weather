import {getCity} from '../../api/geoApi';
import {setCity} from '../CityContext/actions';
import {getCurrentWeather, getDailyForecast} from '../../api/weatherApi';

export const searchCity = async (
  city,
  currentCity,
  setCurrentCity,
  cityHistory,
  setCityHistory,
  setIsLoading,
  setWeather,
  onError,
  onSuccess
) => {
  try {
    setIsLoading(true);
    const result = await getCity(city);
    if (cityHistory.length === 5) {
      cityHistory.splice(
        cityHistory.findIndex(c => c !== currentCity),
        1
      );
    }
    if (cityHistory.findIndex(c => c === result.name) === -1) {
      cityHistory.push(result.name);
      setCityHistory(cityHistory);
      window.localStorage.setItem('city-history', JSON.stringify(cityHistory));
    }
    setCity(result, setCurrentCity);
    const weather = await getCurrentWeather(result.lat, result.lon);
    weather.forecast = await getDailyForecast(result.lat, result.lon);
    setWeather(weather);
    onSuccess();
  } catch (error) {
    if (error.code || error instanceof TypeError) {
      onError(error.message);
    } else throw error;
  } finally {
    setIsLoading(false);
  }
};
