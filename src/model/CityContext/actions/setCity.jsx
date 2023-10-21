export function setCity(newValue, setValue) {
  setValue(newValue);
  window.localStorage.setItem('city', JSON.stringify(newValue));
}
