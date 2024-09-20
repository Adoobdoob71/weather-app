import { FC, useEffect, useState } from "react";
import { WeatherForecastMobile } from "./components/Mobile";
import { WeatherForecastWeb } from "./components/Web";
import { useAppSelector } from "src/redux/weatherForecast/types";
import { useToast } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadWeatherForecast } from "src/api/functions";

const WeatherForecast: FC = () => {
  const [mobile, setMobile] = useState(window.innerWidth < 900);

  const weatherForecast = useAppSelector((state) => state.weatherForecast);
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();

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

    const polling = setInterval(() => {
      loadWeatherForecast(
        location.state.inputType === "city"
          ? location.state.cityName
          : undefined,
        location.state.coords
      );
    }, 5 * 60 * 1000);

    return () => {
      window.removeEventListener("resize", () => {});
      clearInterval(polling);
    };
  }, []);

  return mobile ? <WeatherForecastMobile /> : <WeatherForecastWeb />;
};

export { WeatherForecast };
