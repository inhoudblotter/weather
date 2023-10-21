const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
export function formatDate(timestamp) {
  const date = new Date(timestamp);
  return `${weekDays[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
}
