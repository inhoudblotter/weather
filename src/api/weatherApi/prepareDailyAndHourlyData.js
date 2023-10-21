import {getAverage} from '../../utils/getAverage';

function getWeatherWeight(code, suffix) {
  let result = 0;
  if (code >= 801 && code <= 809) {
    result = 1;
  } else if (code >= 701 && code <= 799) {
    result = 2;
  } else if (code >= 300 && code <= 399) {
    result = 3;
  } else if (code >= 500 && code <= 599) {
    result = 4;
  } else if (code >= 600 && code <= 699) {
    result = 5;
  } else if (code >= 200 && code <= 299) {
    result = 6;
  }
  return suffix === 'd' ? result + 0.5 : result;
}

function getDefaultValue(date) {
  return {
    date: date.getTime(),
    icon: '',
    weatherWeight: -Infinity,
    description: '',
    temp: {
      min: +Infinity,
      average: [],
    },
  };
}

export function prepareDailyAndHourlyData(data) {
  const result = {
    daily: [],
    hourly: [],
  };

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  currentDate.setHours(0, 0, 0, 1);
  const tomorrow = currentDate.getTime() / 1000;
  let dayData = getDefaultValue(currentDate);

  function collectDayData() {
    delete dayData.weatherWeight;
    dayData.temp.average = Math.floor(getAverage(dayData.temp.average));
    dayData.temp.min = Math.floor(dayData.temp.min);
    result.daily.push(dayData);
  }

  for (let i = 0; i < data.length; ++i) {
    const slice = data[i];
    if (result.hourly.length < 8) {
      result.hourly.push({
        date: slice.dt * 1000,
        icon: slice.weather[0].icon,
        description: slice.weather[0].description,
        temp: Math.floor(slice.main.temp),
      });
    }

    if (slice.dt >= tomorrow) {
      const date = new Date(slice.dt * 1000);
      if (
        date.getDate() > currentDate.getDate() ||
        date.getMonth() > currentDate.getMonth() ||
        date.getFullYear() > currentDate.getFullYear()
      ) {
        collectDayData();
        currentDate.setDate(currentDate.getDate() + 1);
        dayData = getDefaultValue(currentDate);
      }

      const weather = slice.weather[0];
      const weatherWeight = getWeatherWeight(weather.id, weather.icon.slice(-1));

      if (weatherWeight > dayData.weatherWeight) {
        dayData.description = weather.description;
        dayData.icon = weather.icon;
        dayData.weatherWeight = weatherWeight;
      }

      dayData.temp.average.push(slice.main.temp);

      if (slice.main.temp_min < dayData.temp.min) dayData.temp.min = slice.main.temp_min;
    }
  }
  collectDayData();
  return result;
}
