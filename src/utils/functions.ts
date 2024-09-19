import { Toast } from "@chakra-ui/react";
import { CACHE_NAME, MAX_CACHE_AGE, WEATHER_API } from "./constants";
import { Coordinates } from "./types";

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
      const result = await response.json();
      cacheItem(key, result);
      return result;
    }

    const { data, expirationDate } = JSON.parse(cachedData) as CachedItem;

    if (Date.now() < expirationDate) return data;

    localStorage.removeItem(key);
    const response = await fetch(url);
    const result = await response.json();
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
  if (type === "city") {
    const response = await fetch(
      `${WEATHER_API}current?city=${cityNameSlug}&key=${process.env.REACT_APP_API_KEY}`
    );
    const result = await response.json();
    if (response.ok) {
      console.log(result);
      const key = result.data[0].city_name + result.data[0].state_code;
      return key;
    }
    return null;
  } else return JSON.stringify(coords);
};

const cacheItem = (key: string, data: any) => {
  const item = JSON.stringify({
    data: data,
    expirationDate: Date.now() + MAX_CACHE_AGE,
  });
  localStorage.setItem(key, item);
};

export { fetchWithCache };
