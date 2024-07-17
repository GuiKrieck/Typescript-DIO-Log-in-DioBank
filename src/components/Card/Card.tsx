import { Box, Center, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { ButtonComp } from '../Button/Button'
import { login } from '../../services/login'
import { useState } from 'react'


export const Card = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")


    return (
        <main style={{ width: '100%', maxWidth: '600px' }}>
            <Box bg='#E5E5E5' borderRadius='25px' padding='15px' width="100%">
                <FormControl>
                    <Center>
                        <h1>Faça o Login</h1>
                    </Center>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type='email'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        border='1px solid #1616bd'
                        marginBottom='30px'
                    />
                    <FormLabel>Senha</FormLabel>
                    <Input
                        type='password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        border='1px solid #1616bd'
                        marginBottom='30px'
                    />
                    <ButtonComp login={() => login(email)}>
                        Login
                    </ButtonComp>
                </FormControl>
            </Box>
        </main>
    )
}