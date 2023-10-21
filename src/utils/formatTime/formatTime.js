function addPrefix(num) {
  if (num < 10) return `0${num}`;
  return num.toString();
}
export function formatTime(timestamp) {
  const date = new Date(timestamp);
  return `${addPrefix(date.getHours())}:${addPrefix(date.getMinutes())}`;
}
