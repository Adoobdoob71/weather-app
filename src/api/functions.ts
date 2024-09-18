import { WeatherResponse } from "src/api/types";
import { WEATHER_API } from "src/utils/constants";

const loadWeatherForecast = async (
  cityName?: string,
  coords?: { latitude: number; longitude: number }
) => {
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7);
  if (cityName) {
    const response = await fetch(
      `${WEATHER_API}?city=${cityName}&start_date=${startDate
        .toISOString()
        .slice(0, 10)}&end_date=${endDate.toISOString().slice(0, 10)}&key=${
        process.env.REACT_APP_API_KEY
      }`
    );
    const data = await response.json();
    if (response.ok) {
      return data as WeatherResponse;
    }
    return data;
  }
  if (coords) {
    const response = await fetch(
      `${WEATHER_API}?lat=${coords.latitude}&lon=${
        coords.longitude
      }&start_date=${startDate.toISOString().slice(0, 10)}&end_date=${endDate
        .toISOString()
        .slice(0, 10)}&key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    if (response.ok) {
      return data as WeatherResponse;
    }
    return data;
  }
};

export { loadWeatherForecast };
