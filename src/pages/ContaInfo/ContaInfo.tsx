import { Box, Grid, GridItem, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"


const ContaInfo = () =>{
    const {userData} = useContext(AppContext)
    return(
        <>
            <Box width='100%' maxWidth='1280px' padding='20px' margin='20px auto' backgroundColor='#F5F5F5'>
                    <Text>Nome: {userData?.name}</Text>
                    <Text>Email: {userData?.email}</Text>
            </Box>
            <Grid templateColumns='repeat(3, 1fr)' gap={4} width='100%' maxWidth='1280px' margin='0 auto 20px'>
                <GridItem height='300px' backgroundColor='#F5F5F5' padding='16px'>
                    Services Menu
                </GridItem>
                <GridItem colSpan={2} height='300px' backgroundColor='#F5F5F5' padding='16px'>
                    Information about Services
                </GridItem>
            </Grid>
        </>
    )
}

export default ContaInfo