import { Center, SimpleGrid, Spinner} from "@chakra-ui/react"
import CardInfo from "../../components/CardInfo/CardInfo"
import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../../context/AppContext"



const Conta = () => {

    const {userData} = useContext(AppContext)
    const {id} = useParams()
    const navigate = useNavigate()

    

    const actualDate = new Date()
    const formatedDate = `${actualDate.getDate()}/${actualDate.getMonth() + 1}/${actualDate.getFullYear()} - ${actualDate.getHours()}:${actualDate.getMinutes()} `

    if(userData && id !== userData.id){
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