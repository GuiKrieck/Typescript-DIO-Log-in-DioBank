import { Box, Text } from "@chakra-ui/react"

interface ICardInfo {
    mainContent: string
    content:string
}

const CardInfo = ({mainContent , content}:ICardInfo) => {

    return (
        <Box 
            backgroundColor='#F5F5F5' 
            width={320} 
            minHeight='120px' 
            padding='5px 0' 
            textAlign='center'
            borderRadius='25px'
        >
            <Text fontSize='2xl' fontWeight='bold'>{mainContent}</Text>
            <Text fontSize='xl'> {content} </Text>
        </Box>
    )
}

export default CardInfo