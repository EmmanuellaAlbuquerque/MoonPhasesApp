import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://devapi.qweather.com/v7',
});

export { instance as qweatherAPI }
