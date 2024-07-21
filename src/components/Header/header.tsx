import { Box, Button, Center, Flex, Text } from '@chakra-ui/react'
import './Header.css'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../../services/storage'

export const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    function logOut():void{
        changeLocalStorage({login:false})
        setIsLoggedIn(false)
        navigate('/')
    }

    return (
        <header>
            <Flex>
                <Center flex={1}>
                    <Text>
                        Dio Bank
                    </Text>
                </Center>
                {isLoggedIn &&
                    (
                        <Box>
                            <Button
                                onClick={() => logOut()}
                                marginRight='5px'>
                                sair
                            </Button>
                        </Box>
                    )
                }
            </Flex>
        </header>
    )
}