import React, { useState } from "react";

export function ColorRondam() {
    const [color, setColor]=useState('')

    const add = () => {
        setColor(`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`)
    };
      return (
        <>
         <h1 style={{color:color,fontSize:'40px'}}>0123456789</h1>
        <button onClick={add}>Add</button>
        </>
      );
    }