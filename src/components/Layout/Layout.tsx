import { Footer } from "../Footer/Footer"
import { Header } from "../Header/header"
import './Layout.css'

export const Layout = ({children}:any) =>{
    return(
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}