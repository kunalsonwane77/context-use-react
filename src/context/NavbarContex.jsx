import { createContext, useState } from "react";

export const NavbarContext=createContext()


function NavbarContextProvider({children}){


    let [isauth,setauth]=useState(true)

    function login(){
       setauth(true)
    }
    function logout(){
        setauth(false)
    }



return <NavbarContext.Provider value={{login,logout,isauth}}>
        {children}
      </NavbarContext.Provider>


}

export default NavbarContextProvider;