import { Card, CardProps, Flex, Image, Text } from "@chakra-ui/react";
import { FC, memo } from "react";
import { WEATHER_ICON_URL } from "src/utils/constants";

interface Props extends CardProps {
  city_name?: string;
  temp?: number;
  icon?: string;
  valid_date?: Date;
}

const WeatherCard: FC<Props> = memo((props) => {
  const { city_name, temp, icon, valid_date, ...otherProps } = props;
  return (
    <Card
      flexDir="column"
      paddingInline={4}
      paddingBlock={2}
      w={[32, 40, 40, 40]}
      {...otherProps}
    >
      <Flex justifyContent="space-between">
        <Flex flexDir="column" alignItems="center" w="fit-content">
          <Image src={`${WEATHER_ICON_URL}${icon}.png`} boxSize={12} />
          <Text fontSize="sm" fontWeight="600">
            {temp} ℃
          </Text>
        </Flex>
        <Text fontSize={["xs", "sm"]} fontWeight="600">
          {valid_date?.toLocaleDateString("en-us", {
            day: "2-digit",
            month: "2-digit",
          })}
        </Text>
      </Flex>
      <Text
        fontSize={["xs", "xs", "sm", "sm"]}
        color="GrayText"
        fontWeight="bold"
        noOfLines={1}
      >
        {city_name}
      </Text>
    </Card>
  );
});

export { WeatherCard };
