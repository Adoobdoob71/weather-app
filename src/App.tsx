import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "./utils/theme";
import { Intro } from "./fragments/Intro";
import { Header } from "./components/Header";

function App() {
  return (
    <ChakraProvider
      theme={theme}
      toastOptions={{ defaultOptions: { position: "bottom-left" } }}
    >
      <Box w="100%" h={window.innerHeight} bg="Background">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" Component={Intro} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
