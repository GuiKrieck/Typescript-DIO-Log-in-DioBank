import { login } from "./login";

describe('login', () =>{

    const mockEmail = 'gui@dio.me'
    const mockPassword = '123456'

    it('Deve ser verdadeiro caso o email E a senha sejam válidos', async() =>{
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
        
    })

    it('Deve ser falso caso o email OU a senha sejam inválidos', async() =>{
        const response = await login('email@invalido.com', "171819")
        expect(response).toBeFalsy()
    })
})