import { CurrentWeatherResponse, WeatherResponse } from "src/api/types";
import { WEATHER_API } from "src/utils/constants";

const loadWeatherForecast = async (
  cityName?: string,
  coords?: { latitude: number; longitude: number }
) => {
  try {
    if (cityName) {
      const response = await fetch(
        `${WEATHER_API}forecast/daily?city=${cityName}&key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      return response.ok ? (data as WeatherResponse) : null;
    }
    if (coords) {
      const response = await fetch(
        `${WEATHER_API}forecast/daily?lat=${coords.latitude}&lon=${coords.longitude}&key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      return response.ok ? (data as WeatherResponse) : data;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

const loadBigCitiesWeather = async () => {
  try {
    const bigCities = ["Tel Aviv", "Palo alto", "Moscow", "Tokyo"];
    const weathersData = await Promise.all(
      bigCities.map(async (cityName) => {
        const response = await fetch(
          `${WEATHER_API}current?city=${cityName}&key=${process.env.REACT_APP_API_KEY}`
        );
        const data = await response.json();
        return response.ok ? (data as CurrentWeatherResponse) : null;
      })
    );
    return weathersData;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export { loadWeatherForecast, loadBigCitiesWeather };
