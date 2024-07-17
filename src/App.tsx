import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Conta from "./pages/Conta/Conta";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout/Layout";
import ContaInfo from "./pages/ContaInfo/ContaInfo";



function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={<Conta />} />
            <Route path="/infoconta" element={<ContaInfo />} />
          </Routes>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>

  )
}

export default App;
