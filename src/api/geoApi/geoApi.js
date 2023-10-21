export async function getCity(city) {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search.php?q=${city}&format=json&addressdetails=1&limit=1&accept-language=ru`
  );
  if (res.ok) {
    try {
      let data = await res.json();

      if (!data.length || !data[0].display_name)
        throw {code: 404, message: 'Упс! Город не найден, попробуйте другой'};
      data = data[0];

      return {
        name: data.display_name.split(',')[0].trim(),
        lat: data.lat,
        lon: data.lon,
      };
    } catch (error) {
      if (error instanceof TypeError) {
        throw new TypeError('Ошибка в ответе сервера');
      } else throw error;
    }
  } else {
    throw {code: res.status, message: `${res.status} - ошибка сервера`};
  }
}
