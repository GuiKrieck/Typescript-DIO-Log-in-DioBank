import { Center, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { ButtonComp } from '../Button/Button'
import { login } from '../../services/login'
import { useEffect, useState } from 'react'
import { api } from '../../api'

interface IUserData {
    email: string,
    password: string,
    name: string
}

export const Card = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [userData, setUserData] = useState<null | IUserData>()

    useEffect(() => {
        const getData = async () => {
            const data: any | IUserData = await api
            setUserData(data);

        }

        getData()
    }, [])

    return (
        <main style={{ width: '100%' }}>
            {userData === null || userData === undefined
                ? <Center>
                    <h1> Carregando Informações...</h1>
                  </Center>
                : <FormControl>
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
            }

        </main>
    )
}