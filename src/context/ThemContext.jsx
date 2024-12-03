import { createContext, useState } from "react";

export const ThemeContext=createContext()


function ThemeContextProvider({children}){

  let [thime,setthime]=useState("light")

  let [count,setcount]=useState(0)


  function Changethime(){
    setthime(thime=="dark"?"light":"dark")
  }

  function Changecount(){
    setcount(count+1)
  }


return <ThemeContext.Provider value={{thime:thime,Changethime:Changethime,count:count,Changecount:Changecount}}>
        {children}
        </ThemeContext.Provider>

}


export default ThemeContextProvider;