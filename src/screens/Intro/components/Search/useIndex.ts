import { useToast } from "@chakra-ui/react";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { loadWeatherForecast } from "src/api/functions";
import { updateForecast } from "src/redux/weatherForecast/slice";
import { useAppDispatch } from "src/redux/weatherForecast/types";

interface search {
  cityName: string;
  coords: { latitude: number; longitude: number };
  inputType: string;
  loading: boolean;
}

const useIndex = () => {
  const [searchState, searchDispatch] = useReducer(
    (prev: search, next: Partial<search>) => {
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
          if (searchState.cityName === "")
            throw new Error("City's name is empty");
          result = await loadWeatherForecast(searchState.cityName);
          break;
        case "coordinates":
          result = await loadWeatherForecast(undefined, {
            latitude: searchState.coords.latitude,
            longitude: searchState.coords.longitude,
          });
          break;
      }
      if (!(result instanceof Error) && result) {
        dispatch(updateForecast(result));
        searchDispatch({ loading: false });
        return navigate("/forecast", { state: searchState });
      }
      throw new Error("Couldn't find that");
    } catch (error: any) {
      console.error(error);
      searchDispatch({ loading: false });
      toast({
        status: "error",
        title: "Uh oh!",
        description: JSON.stringify(error.message),
        duration: 2000,
      });
    }
  };

  return { searchState, searchDispatch, getUserLocation, getLocationForecast };
};

export { useIndex };
