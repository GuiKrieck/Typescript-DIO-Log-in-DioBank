import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface IButton {
    children: string,
    onClick: MouseEventHandler
}

export const ButtonComp = ({children, onClick}: IButton) =>{
    return(
        <Button colorScheme='teal' size='sm' width='100%' marginTop='5px' onClick={onClick}>
            {children}
        </Button>

    )
}

