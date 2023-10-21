import {getCurrentWeather, getDailyForecast} from '../../api/weatherApi';

export async function loadWeather(city, setWeather, onSuccess, onError) {
  try {
    const result = await getCurrentWeather(city.lat, city.lon);
    result.forecast = await getDailyForecast(city.lat, city.lon);
    setWeather(result);
    onSuccess();
  } catch (error) {
    if (error.code || error instanceof TypeError) {
      onError(error.message);
    } else throw error;
  }
}
