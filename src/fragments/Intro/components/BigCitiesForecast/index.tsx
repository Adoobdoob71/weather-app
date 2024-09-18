import { Box } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { loadBigCitiesWeather } from "src/api/functions";
import { CurrentWeatherResponse } from "src/api/types";
import { WeatherCard } from "src/components/WeatherCard";

const BigCitiesForecast: FC = () => {
  const [data, setData] = useState<(CurrentWeatherResponse | null)[]>([]);

  useEffect(() => {
    loadBigCitiesWeather().then((result) => setData(result));
  }, []);

  return (
    <Box
      display={["grid", "grid", "flex"]}
      mt={8}
      gridTemplateColumns="repeat(2, 30%)"
      columnGap={[0, 0, 8]}
      justifyContent={["space-evenly", "space-evenly", "center"]}
      w="100%"
    >
      {data.slice(0, 7).map((item, index) => (
        <WeatherCard
          city_name={item?.data[0].city_name}
          icon={item?.data[0].weather.icon}
          country_code={item?.data[0].country_code}
          description={item?.data[0].weather.description}
          temp={item?.data[0].temp}
          key={index}
          mb={[8, 8, 0]}
        />
      ))}
    </Box>
  );
};

export { BigCitiesForecast };
