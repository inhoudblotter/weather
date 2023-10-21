import {prepareDailyAndHourlyData} from './prepareDailyAndHourlyData';

export function getCurrentWeather(lat, lon) {
  return fetch(
    import.meta.env.VITE_WEATHER_API +
      `/weather?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric&lang=ru`
  )
    .then(res => {
      if (res.ok) {
        return res.json();
      } else throw {code: res.status, message: `Ошибка сервера. Код: ${res.status}`};
    })
    .then(data => {
      return {
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        temp: Math.round(data.main.temp),
        feels_like: Math.round(data.main.feels_like),
        wind: {speed: data.wind.speed, deg: data.wind.deg},
        humidity: data.main.humidity,
        visibility: Math.round(data.visibility / 100) / 10,
        pressure: Math.round(Number(data.main.pressure) * 0.750062),
      };
    })
    .catch(error => {
      if (error instanceof TypeError) {
        throw {code: 'TypeError', message: 'Невозможно разобрать ответ сервера'};
      } else throw error;
    });
}

export async function getDailyForecast(lat, lon) {
  return fetch(
    import.meta.env.VITE_WEATHER_API +
      `/forecast?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric&lang=ru`
  )
    .then(res => {
      if (res.ok) {
        return res.json();
      } else throw {code: res.status, message: `Ошибка сервера. Код: ${res.status}`};
    })
    .then(data => {
      if (data.cod === '200') {
        return prepareDailyAndHourlyData(data.list);
      } else throw {code: data.cod, message: `Ошибка сервера. Код: ${data.cod}`};
    })
    .catch(error => {
      if (error instanceof TypeError) {
        throw {code: 'TypeError', message: 'Невозможно разобрать ответ сервера'};
      } else throw error;
    });
}
