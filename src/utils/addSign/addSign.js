export function addSign(num) {
  if (num > 0) {
    return `+${num}`;
  } else if (num < 0) {
    return num.toString();
  } else return num.toString();
}
