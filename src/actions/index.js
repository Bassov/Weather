import axios from 'axios';

const API_KEY = '1aebaa1cdc1eab2fa38fb4ecc9f1185c';
const ROOT_URL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url).then(data => data);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
