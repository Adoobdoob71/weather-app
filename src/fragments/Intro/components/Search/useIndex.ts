import { useToast } from "@chakra-ui/react";
import { useReducer } from "react";

const useIndex = () => {
  const [state, dispatch] = useReducer(
    (
      prev: {
        cityName?: string;
        coords?: { latitude: number; longitude: number };
        inputType?: string;
      },
      next: {
        cityName?: string;
        coords?: { latitude: number; longitude: number };
        inputType?: string;
      }
    ) => {
      return { ...prev, ...next };
    },
    { cityName: "", coords: { latitude: 0, longitude: 0 }, inputType: "city" }
  );

  const toast = useToast();

  const getUserLocation = async () => {
    navigator.geolocation.getCurrentPosition(
      (coords) => {
        dispatch({
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

  return {
    state,
    dispatch,
    getUserLocation,
  };
};

export { useIndex };
