import { useEffect, useState } from "react";
import { useAppSelector } from "src/redux/weatherForecast/types";
import { useToast } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadWeatherForecast } from "src/api/functions";

const useIndex = () => {
  const [mobile, setMobile] = useState(window.innerWidth < 900);

  const weatherForecast = useAppSelector((state) => state.weatherForecast);
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const pollingMechanism = () => {
    const clearPolling = setInterval(() => {
      loadWeatherForecast(
        location.state.inputType === "city"
          ? location.state.cityName
          : undefined,
        location.state.coords
      );
    }, 5 * 60 * 1000);
    return clearPolling;
  };
  useEffect(() => {
    window.addEventListener("resize", () => setMobile(window.innerWidth < 900));
    if (weatherForecast.sevenDayForecast === null) {
      toast({
        status: "error",
        title: "Uh oh!",
        description: "You haven't searched anything yet :(",
      });
      navigate("/");
    }

    const polling = pollingMechanism();

    return () => {
      window.removeEventListener("resize", () => {});
      clearInterval(polling);
    };
  }, []);

  return {
    mobile,
  };
};

export { useIndex };
