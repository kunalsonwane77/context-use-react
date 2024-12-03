import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemContext'

function Button({InnerText,insidefunction}) {
  let ThimeData = useContext(ThemeContext)
   console.log(ThimeData)
  let {thime,Changethime,Changecount}=ThimeData

 
  
    
  return (
    <div>
        {/* <button onClick={Changethime} style={{backgroundColor:thime=="dark"?"black":"white",
            color:thime=="dark"?"white":"black"
        }}>click to chanage</button>  */}
       

       <button onClick={insidefunction} className={thime=="dark"?"dark":"light"}>{InnerText}</button>

       {/* <button onClick={Changecount}>click</button> */}
    </div>
  )
}

export default Button