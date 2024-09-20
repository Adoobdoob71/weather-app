import { Box, Flex, IconButton, Input, Select, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FC } from "react";
import { Icon } from "src/components/Icon";
import { useIndex } from "./useIndex";

const Search: FC = () => {
  const { searchState, searchDispatch, getUserLocation, getLocationForecast } =
    useIndex();

  return (
    <>
      <Box
        display="flex"
        as="form"
        id="searchForm"
        justifyContent="center"
        alignItems="center"
        w="100%"
        mt={[6, 6, 6, 8]}
      >
        {searchState.inputType === "coordinates" && (
          <IconButton
            icon={
              <Icon
                d="M256 0c17.7 0 32 14.3 32 32l0 34.7C368.4 80.1 431.9 143.6 445.3 224l34.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-34.7 0C431.9 368.4 368.4 431.9 288 445.3l0 34.7c0 17.7-14.3 
                32-32 32s-32-14.3-32-32l0-34.7C143.6 431.9 80.1 368.4 66.7 288L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l34.7 0C80.1 143.6 143.6 80.1 224 66.7L224 32c0-17.7 14.3-32 32-32zM128 256a128 
                128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"
              />
            }
            isRound
            onClick={getUserLocation}
            aria-label="Search my location"
            colorScheme="blue"
            fontSize="sm"
            size="sm"
            me={3}
          />
        )}
        {searchState.inputType === "city" ? (
          <Input
            size={["md", "lg", "lg"]}
            placeholder="Enter a city name..."
            variant="filled"
            colorScheme="blue"
            required
            value={searchState.cityName}
            onChange={(event) =>
              searchDispatch({ cityName: event.target.value })
            }
            w={["70%", "60%", "45%", "45%", "40%"]}
          />
        ) : (
          <Flex
            w={["60%", "50%"]}
            flexDir={["column", "column", "row"]}
            rowGap={[2, 4, 0]}
            columnGap={[0, 0, 3]}
          >
            <Input
              size={["md", "lg", "lg"]}
              placeholder="Latitude"
              variant="filled"
              colorScheme="blue"
              required
              type="number"
              value={searchState.coords.latitude}
              onChange={(event) =>
                searchDispatch({
                  coords: {
                    latitude:
                      parseFloat(event.target.value) ||
                      searchState.coords.latitude,
                    longitude: searchState.coords.longitude,
                  },
                })
              }
            />
            <Input
              size={["md", "lg", "lg"]}
              placeholder="Longitude"
              variant="filled"
              colorScheme="blue"
              required
              type="number"
              value={searchState.coords.longitude}
              onChange={(event) =>
                searchDispatch({
                  coords: {
                    latitude: searchState.coords.latitude,
                    longitude:
                      parseFloat(event.target.value) ||
                      searchState.coords.longitude,
                  },
                })
              }
            />
          </Flex>
        )}
        <IconButton
          icon={<SearchIcon />}
          isLoading={searchState.loading}
          aria-label="Search place"
          type="submit"
          onClick={getLocationForecast}
          colorScheme="yellow"
          fontSize={["sm", "md"]}
          size={["sm", "md"]}
          ms={3}
        />
      </Box>
      <Flex alignItems="center" mt={8}>
        <Text me={6}>Search By</Text>
        <Select
          w="fit-content"
          onChange={(event) =>
            searchDispatch({ inputType: event.target.value })
          }
          size={["sm", "sm", "md"]}
          defaultValue="city"
          colorScheme="yellow"
        >
          <option value="city">City</option>
          <option value="coordinates">Coords</option>
        </Select>
      </Flex>
    </>
  );
};

export { Search };
