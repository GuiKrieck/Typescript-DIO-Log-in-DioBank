import { Button } from "@chakra-ui/react"

interface IButton {
    children: string,
    login: Function
}

export const ButtonComp = ({children, login}: IButton) =>{
    return(
        <Button colorScheme='teal' size='sm' width='100%' marginTop='5px' onClick={() => login()}>
            {children}
        </Button>

    )
}

