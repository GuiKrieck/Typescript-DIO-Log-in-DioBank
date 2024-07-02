import { FormControl, FormLabel, Input } from '@chakra-ui/react'

export const Card = () => {
    return (
        <main style={{width:'100%',}}>
            <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type='email' border='1px solid #1616bd' marginBottom='30px' />      
                    <FormLabel>Senha</FormLabel>
                    <Input type='password' border='1px solid #1616bd' marginBottom='30px' />           
            </FormControl>
        </main>
    )
}