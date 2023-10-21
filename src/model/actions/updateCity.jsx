import {getCity} from '../../api/geoApi';
import {setCity} from '../../model/CityContext/actions';
import {getCurrentWeather, getDailyForecast} from '../../api/weatherApi';

export async function updateCity(city, setCurrentCity, setLoading, setWeather, onSuccess, onError) {
  try {
    setLoading(true);
    const result = await getCity(city);
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
    setLoading(false);
  }
}
