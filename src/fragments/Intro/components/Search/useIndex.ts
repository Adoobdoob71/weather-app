import { useToast } from "@chakra-ui/react";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { loadWeatherForecast } from "src/api/functions";
import { WeatherResponse } from "src/api/types";
import { updateForecast } from "src/redux/weatherForecast/slice";
import { useAppDispatch } from "src/redux/weatherForecast/types";

interface search {
  cityName?: string;
  coords?: { latitude?: number; longitude?: number };
  inputType?: string;
  loading?: boolean;
}

const useIndex = () => {
  const [searchState, searchDispatch] = useReducer(
    (prev: search, next: search) => {
      return { ...prev, ...next };
    },
    {
      cityName: "",
      coords: { latitude: 0, longitude: 0 },
      inputType: "city",
      loading: false,
    }
  );

  const toast = useToast();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getUserLocation = async () => {
    navigator.geolocation.getCurrentPosition(
      (coords) => {
        searchDispatch({
          coords: {
            latitude: coords.coords.latitude,
            longitude: coords.coords.longitude,
          },
        });
      },
      (error) => {
        toast({
          title: "Something went wrong...",
          description: error.message,
          status: "error",
          duration: 3000,
        });
      }
    );
  };

  const getLocationForecast = async () => {
    try {
      searchDispatch({ loading: true });
      let result = null;
      switch (searchState.inputType) {
        case "city":
          if (searchState.cityName === "") break;
          result = await loadWeatherForecast(searchState.cityName);
          break;
        case "coordinates":
          result = await loadWeatherForecast(undefined, {
            latitude: searchState.coords?.latitude ?? 0,
            longitude: searchState.coords?.longitude ?? 0,
          });
          break;
      }

      // NEED TO HANDLE ERRORS
      if (result instanceof WeatherResponse) {
        dispatch(updateForecast(result));
        searchDispatch({ loading: false });
        return navigate("/forecast");
      }
      searchDispatch({ loading: false });
      throw "Couldn't find forecast";
    } catch (error) {
      console.error(error);
      toast({
        status: "error",
        title: "Uh oh!",
        description: JSON.stringify(error),
      });
    }
  };

  return { searchState, searchDispatch, getUserLocation, getLocationForecast };
};

export { useIndex };
