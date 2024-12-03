import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemContext'
import Button from './Button'
import { NavbarContext } from '../context/NavbarContex'

function Navbar() {
   let {thime,Changethime} = useContext(ThemeContext)
   let {login,logout,isauth}=useContext(NavbarContext)

   
    
   
  return (
    <div className={thime=="dark"?"dark navbar":"light navbar"} >
        
            <img src="https://www.designrush.com/uploads/users/customer-11/image_1526487017_D4nHpYcQEqJIECHp7VuoM7UR9XJw8GdGB0wdshls.png" />
             
            <h1>is Authanticate : {isauth?"Yes":"No"}</h1>

             <Button InnerText={"Login"} insidefunction={login}/>
             <Button InnerText={"Logout"} insidefunction={logout}/>
            
        
    </div>
  )
}

export default Navbar