import React from 'react'
import {useState} from "react"
import Dice from "./Dice" 

export default function App(){

    return(

        <>
        
         
         <div className= "base-container">
                     <h1>Tenzies </h1>
                     <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                     < div className="dice-container">
                            <Dice />
                            <Dice />
                            <Dice />
                            <Dice />
                            <Dice />
                            <Dice />
                            <Dice />
                            <Dice />
                            <Dice />
                            <Dice />
                     </div>

                     <button className="roll-button"> Roll </button>



         </div>
       
        </>
    )
}