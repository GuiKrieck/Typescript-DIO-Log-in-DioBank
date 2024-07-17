import {
  Box,
  Center,
  ChakraProvider,
} from '@chakra-ui/react'
import "./App.css"
import { Layout } from './components/Layout/Layout';
import { Card } from './components/Card/Card';



function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Box minHeight='84.3vh' backgroundColor='#9413DC' padding='25px' display='flex' alignItems='center'>
          <Center>
            <Box bg='#E5E5E5' borderRadius='25px' padding='15px' maxW='500px'>
              <Center>
                <h1>Faça o Login</h1>
              </Center>
              <Center flexDirection='column' gap='10px'>
                <Card />
              </Center>
            </Box>
          </Center>
        </Box>
      </Layout>
    </ChakraProvider>
  )
}

export default App;
