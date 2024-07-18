import { Box } from '@chakra-ui/react'



export const Card = ({children}: any) => {



    return (
        <main style={{ width: '100%', maxWidth: '600px' }}>
            <Box bg='#E5E5E5' borderRadius='25px' padding='15px' width="100%">
                {children}
            </Box>
        </main>
    )
}