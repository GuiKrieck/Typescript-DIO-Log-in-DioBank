import { Center, SimpleGrid, Spinner} from "@chakra-ui/react"
import CardInfo from "../../components/CardInfo/CardInfo"
import { useEffect, useState } from "react"
import { api } from '../../api'
import { useNavigate, useParams } from "react-router-dom"

interface IUserData {
    email: string
    password: string
    name: string
    balance: number
    id: number
}

const Conta = () => {

    const [userData, setUserData] = useState<null | IUserData>()
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            const data: any | IUserData = await api
            setUserData(data);

        }

        getData()
    }, [])

    const actualDate = new Date()
    const formatedDate = `${actualDate.getDate()}/${actualDate.getMonth() + 1}/${actualDate.getFullYear()} - ${actualDate.getHours()}:${actualDate.getMinutes()} `

    if(userData && id !== userData.id.toString()){
        navigate('/')
    }

    return (
        <Center flex='1' alignItems='flex-start'>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null
                    ? (
                        <Center>
                            <Spinner size='xl' color="#FFFFFF" />
                        </Center>
                    )
                    : (
                        <>
                            <CardInfo mainContent={`Bem vindo(a) ${userData?.name}`} content={formatedDate} />
                            <CardInfo mainContent={`Saldo`} content={`R$ ${userData.balance}`} />
                        </>
                    )
                }
            </SimpleGrid>
        </Center>
    )
}

export default Conta