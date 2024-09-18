import { Box, ChakraProvider, useColorMode } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "./utils/theme";
import { Intro } from "./fragments/Intro";
import { Header } from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./redux/weatherForecast/store";
import { WeatherForecast } from "./fragments/WeatherForecast";

function App() {
  return (
    <ChakraProvider
      theme={theme}
      toastOptions={{ defaultOptions: { position: "bottom-left" } }}
    >
      <Provider store={store}>
        <Box w="100%" h={window.innerHeight}>
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={Intro} />
              <Route path="/forecast" Component={WeatherForecast} />
            </Routes>
          </BrowserRouter>
        </Box>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
