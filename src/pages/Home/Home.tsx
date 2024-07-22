import { Center, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { Card } from '../../components/Card/Card';
import { ButtonComp } from '../../components/Button/Button';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';


const Home = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {handleLogin} = useContext(AppContext)

    return (
        <Center width='100%'>
            <Card>
                <FormControl>
                    <Center>
                        <h1>Faça o Login</h1>
                    </Center>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type='email'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                        border='1px solid #1616bd'
                        marginBottom='30px'
                    />
                    <FormLabel>Senha</FormLabel>
                    <Input
                        type='password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                        border='1px solid #1616bd'
                        marginBottom='30px'
                    />
                    <ButtonComp onClick={() => handleLogin(email, password)}>
                        Login
                    </ButtonComp>
                </FormControl>
            </Card>
        </Center>
    )
}

export default Home