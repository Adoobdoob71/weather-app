import { WeatherResponse } from "src/api/types";
import { WEATHER_API } from "src/utils/constants";
import { fetchWithCache } from "src/utils/functions";

const loadWeatherForecast = async (
  cityName?: string,
  coords?: { latitude: number; longitude: number }
) => {
  try {
    if (cityName) {
      const cityNameSlug = cityName.toLowerCase();
      const data = await fetchWithCache(
        `${WEATHER_API}forecast/daily?city=${cityNameSlug}&key=${process.env.REACT_APP_API_KEY}`,
        "city",
        cityNameSlug
      );
      return (data as WeatherResponse) ?? data;
    }
    if (coords) {
      const data = await fetchWithCache(
        `${WEATHER_API}forecast/daily?lat=${coords.latitude}&lon=${coords.longitude}&key=${process.env.REACT_APP_API_KEY}`,
        "coordinates",
        undefined,
        coords
      );
      return (data as WeatherResponse) ?? data;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { loadWeatherForecast };
