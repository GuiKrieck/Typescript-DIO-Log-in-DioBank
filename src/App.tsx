import "./App.css"
import { BrowserRouter} from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout/Layout";
import { APPContextProvider } from "./context/AppContext";
import MainRoutes from "./routes";




function App() {
  return (
    <BrowserRouter>
      <APPContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </APPContextProvider>
    </BrowserRouter>

  )
}

export default App;
