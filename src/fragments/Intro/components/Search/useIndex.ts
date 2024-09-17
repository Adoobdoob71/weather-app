import { useToast } from "@chakra-ui/react";
import { useReducer } from "react";

interface search {
  cityName?: string;
  coords?: { latitude: number; longitude: number };
  inputType?: string;
}

const useIndex = () => {
  const [searchState, searchDispatch] = useReducer(
    (prev: search, next: search) => {
      return { ...prev, ...next };
    },
    { cityName: "", coords: { latitude: 0, longitude: 0 }, inputType: "city" }
  );

  const toast = useToast();

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

  return { searchState, searchDispatch, getUserLocation };
};

export { useIndex };
