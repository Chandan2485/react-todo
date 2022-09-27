import React,{useState} from "react"

export function Colortoggle(){
    const [isRed, setIsRed]=useState(true)

    const colorToggles=()=>{
        setIsRed(!isRed)
    }

    return (
        <>
         <h1 style={{color:isRed? 'red':"blue"}}>0123456789</h1>
        <button onClick={colorToggles}>Add</button>
        </>
      );
}