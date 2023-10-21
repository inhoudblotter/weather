export function getAverage(list) {
  return list.reduce((acc, v) => acc + v) / list.length;
}
