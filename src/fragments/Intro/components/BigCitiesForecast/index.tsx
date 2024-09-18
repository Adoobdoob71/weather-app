import { Container } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { loadWeatherForecast } from "src/api/functions";
import { WeatherCard } from "src/components/WeatherCard";
import { loadingTrue, updateForecast } from "src/redux/weatherForecast/slice";
import {
  useAppDispatch,
  useAppSelector,
} from "src/redux/weatherForecast/types";

interface Props {}

const BigCitiesForecast: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.weatherForecast);
  useEffect(() => {
    dispatch(loadingTrue());
    loadWeatherForecast("Tel Aviv").then((result) => {
      dispatch(updateForecast(result));
    });
  }, []);
  return (
    <Container mt={6} alignItems="center">
      {state.sevenDayForecast &&
        state.sevenDayForecast.data.map((item, index) => (
          <WeatherCard
            city_name={state.sevenDayForecast?.city_name}
            data={item}
            key={index}
          />
        ))}
    </Container>
  );
};

export { BigCitiesForecast };
