const SCREEN_HEIGHT = window.innerHeight;
const SCREEN_WIDTH = window.innerWidth;
const WEATHER_API = "https://api.weatherbit.io/v2.0/";
const WEATHER_ICON_URL = "https://cdn.weatherbit.io/static/img/icons/";
const MAX_CACHE_AGE = 5 * 60 * 1000;
const CACHE_NAME = "WEATHER_FORECASTS";

export {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  WEATHER_ICON_URL,
  WEATHER_API,
  MAX_CACHE_AGE,
  CACHE_NAME,
};
