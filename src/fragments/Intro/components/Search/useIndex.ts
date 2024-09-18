import { useToast } from "@chakra-ui/react";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { loadWeatherForecast } from "src/api/functions";
import { updateForecast } from "src/redux/weatherForecast/slice";
import { useAppDispatch } from "src/redux/weatherForecast/types";

interface search {
  cityName?: string;
  coords?: { latitude?: number; longitude?: number };
  inputType?: string;
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
    if (searchState.inputType === "city") {
      const result = await loadWeatherForecast(searchState.cityName);
      if (!result)
        return toast({
          status: "error",
          title: "Uh oh!",
          description: "Input must be problematic :(",
        });
      dispatch(updateForecast(result));
    } else {
      const result = await loadWeatherForecast(undefined, {
        latitude: searchState.coords?.latitude ?? 0,
        longitude: searchState.coords?.longitude ?? 0,
      });
      if (!result)
        return toast({
          status: "error",
          title: "Uh oh!",
          description: "Input must be problematic :(",
        });
      dispatch(updateForecast(result));
    }
    navigate("/forecast");
  };

  return { searchState, searchDispatch, getUserLocation, getLocationForecast };
};

export { useIndex };
