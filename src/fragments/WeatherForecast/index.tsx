import { FC, useEffect, useState } from "react";
import { WeatherForecastMobile } from "./components/Mobile";
import { WeatherForecastWeb } from "./components/Web";

const WeatherForecast: FC = () => {
  const [mobile, setMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    window.addEventListener("resize", () => setMobile(window.innerWidth < 900));
  }, []);

  return mobile ? <WeatherForecastMobile /> : <WeatherForecastWeb />;
};

export { WeatherForecast };
