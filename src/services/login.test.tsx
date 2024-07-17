import { login } from "./login";

describe('login', () =>{

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'gui@dio.me'

    it('Deve exibir um alert com boas vindas caso o email seja válido', async() =>{
        await login(mockEmail)
        expect(window.alert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`)
    })

    it('Não deve exibir a mensgaem de boas vindas sem o email', async () => {
        await login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo')
    })

    it('Deve exibir um erro caso o email seja inválido', async() =>{
        await login('email@invalido.com')
        expect(mockAlert).toHaveBeenCalledWith('Email inválido')
    })
})