import { FC } from "react";
import { WeatherForecastMobile } from "./components/Mobile";
import { WeatherForecastWeb } from "./components/Web";
import { useIndex } from "./useIndex";

const WeatherForecast: FC = () => {
  const { mobile } = useIndex();

  return mobile ? <WeatherForecastMobile /> : <WeatherForecastWeb />;
};

export { WeatherForecast };
