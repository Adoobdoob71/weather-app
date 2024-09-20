import { WeatherResponse } from "src/api/types";
import { MAX_CACHE_AGE, WEATHER_API } from "src/utils/constants";
import { Coordinates } from "src/utils/types";

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
  } catch (error: any) {
    console.error(error);
    return error;
  }
};

interface CachedItem {
  data: any;
  expirationDate: number;
}

const fetchWithCache = async (
  url: string,
  type: "city" | "coordinates",
  cityNameSlug?: string,
  coords?: Coordinates
) => {
  try {
    const broadCoords = {
      latitude: parseFloat(coords?.latitude.toFixed(2) ?? ""),
      longitude: parseFloat(coords?.longitude.toFixed(2) ?? ""),
    };
    const key = await retrieveKey(type, cityNameSlug, broadCoords);
    const cachedData = localStorage.getItem(key);

    if (!cachedData) {
      const response = await fetch(url);
      const result = (await response.json()) as WeatherResponse;
      cacheItem(key, result);
      return result;
    }

    const { data, expirationDate } = JSON.parse(cachedData) as CachedItem;

    if (Date.now() < expirationDate) return data;

    localStorage.removeItem(key);
    const response = await fetch(url);
    const result = (await response.json()) as WeatherResponse;
    cacheItem(key, result);
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const retrieveKey = async (
  type: "city" | "coordinates",
  cityNameSlug?: string,
  coords?: Coordinates
) => {
  try {
    let response = null;
    if (type === "city")
      response = await fetch(
        `${WEATHER_API}current?city=${cityNameSlug}&key=${process.env.REACT_APP_API_KEY}`
      );
    else
      response = await fetch(
        `${WEATHER_API}current?lat=${coords?.latitude}&lon=${coords?.longitude}&key=${process.env.REACT_APP_API_KEY}`
      );
    const result = await response.json();
    if (response.ok) {
      const key = result.data[0].city_name + result.data[0].state_code;
      return key;
    }
    return new Error("Couldn't find city");
  } catch (error) {
    console.error(error);
    return error;
  }
};

const cacheItem = (key: string, data: any) => {
  try {
    const item = JSON.stringify({
      data: data,
      expirationDate: Date.now() + MAX_CACHE_AGE,
    });
    localStorage.setItem(key, item);
  } catch (error) {
    console.error(error);
    return error;
  }
};

export { loadWeatherForecast, fetchWithCache };
