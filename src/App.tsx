import { Box, ChakraProvider, useToast } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "./utils/theme";
import { Intro } from "./screens/Intro";
import { Provider } from "react-redux";
import { store } from "./redux/weatherForecast/store";
import { WeatherForecast } from "./screens/WeatherForecast";
import { useEffect } from "react";

function App() {
  const toast = useToast();

  useEffect(() => {
    window.addEventListener("offline", () =>
      toast({
        status: "warning",
        title: "I'm lagging!",
        description: "Check your internet connection",
        duration: 2000,
      })
    );
    window.addEventListener("online", () =>
      toast({
        status: "success",
        title: "And we're back!",
        description: "Internet connection is back",
        duration: 2000,
      })
    );
    return () => {
      window.removeEventListener("offline", () => {});
      window.removeEventListener("online", () => {});
    };
  }, []);

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
