import { createContext, useEffect, useState } from "react"
import { changeLocalStorage, getAllLocalStorage } from "../services/storage"
import { api } from "../api"
import { login } from "../services/login"
import { useNavigate } from "react-router-dom"

interface IUserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

interface IAppContext{
    isLoggedIn: boolean,
    userData: IUserData | null
    setIsLoggedIn: (isLoggedIn: boolean) => void,
    handleLogin:(email:string, password:string) => void

}

export const AppContext = createContext({} as IAppContext)

export const APPContextProvider = ({children}: any) => {
    
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [userData, setUserData] = useState<null | IUserData>(null)
    const navigate = useNavigate()
    const storage = getAllLocalStorage()

    useEffect(() => {
        const getData = async () => {
            const data: any | IUserData = await api
            setUserData(data);
        }
        getData()
    }, [])

    useEffect(() =>{
        if(storage){
            const { login } = JSON.parse(storage)
            setIsLoggedIn(login)
        }
    },[storage])

    const handleLogin = async (email:string, password:string) => {
        const loggedIn = await login(email, password)

        if(!loggedIn){
            alert("Email e/ou senha inválidos, tente novamente.")
            return
        }

        setIsLoggedIn(true)
        changeLocalStorage({login: true})
        navigate('/conta/1')
    }

    return(
        <AppContext.Provider value={{isLoggedIn, setIsLoggedIn, userData, handleLogin}}>
            {children}
        </AppContext.Provider>
    )
}