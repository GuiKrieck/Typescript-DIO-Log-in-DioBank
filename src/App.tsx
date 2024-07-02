import { 
  Box,
  Center,
  ChakraProvider,
} from '@chakra-ui/react'
import "./App.css"
import { login } from './services/login';
import { Layout } from './components/Layout/Layout';
import { Card } from './components/Card/Card';
import { ButtonComp } from './components/Button/Button';


function App() {
  return (
    <ChakraProvider>
      <Layout>
      <Box minHeight='84.3vh' backgroundColor='#9413DC' padding='25px' display='flex' alignItems='center'>
        <Box bg='#E5E5E5' borderRadius='25px' padding='15px'> 
          <Center>
            <h1>Faça o Login</h1>
          </Center>
          <Center flexDirection='column' gap='10px'>
            <Card />
            <ButtonComp login={() => login()}>
              Login
            </ButtonComp>
          </Center>
        </Box>
      </Box>
      </Layout>
    </ChakraProvider>
  )
}

export default App;
