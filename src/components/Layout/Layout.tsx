import { Box } from "@chakra-ui/react"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/header"


export const Layout = ({children}:any) =>{
    return(
        <Box minHeight='100vh' backgroundColor='#9413DC' display='flex' flexDir='column' justifyContent='space-between'>
            <Header/>
            {children}
            <Footer/>
        </Box>
    )
}