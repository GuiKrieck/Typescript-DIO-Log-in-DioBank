import { Center, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { Card } from '../../components/Card/Card';
import { ButtonComp } from '../../components/Button/Button';
import { useContext, useState } from 'react';
import { login} from '../../services/login';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const Home = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const {setIsLoggedIn} = useContext(AppContext)

    const validateUser = async (email:string) => {
        const loggedIn = await login(email)

        if(!loggedIn){
            alert("Email inválido")
            return
        }
        setIsLoggedIn(true)
        navigate('/conta/1')
    }

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
                    <ButtonComp onClick={() => validateUser(email)}>
                        Login
                    </ButtonComp>
                </FormControl>
            </Card>
        </Center>
    )
}

export default Home