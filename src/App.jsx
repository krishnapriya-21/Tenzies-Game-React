import React from 'react'
import {useState, useEffect, useRef} from "react"
import Dice from "./Dice" 
import Confetti from "react-confetti"

export default function App(){


    const [dice,setDice]= useState(generateNewDice())

    const [tenzies, setTenzies]= useState(false)

    const modalRef = useRef(null)


    // Function Generating Random New Dice
    function generateNewDice(){
        
        return new Array(10)
        .fill(0)
        .map( ()=>({
            id: crypto.randomUUID(),
            value : Math.ceil(Math.random() * 6),
            isHeld: false
        }))

    }

    useEffect(()=>{

        const allHeld= dice.every(dice=>dice.isHeld)
        const firstValue= dice[0].value
        const allSameValue= dice.every(dice=> dice.value === firstValue)

        if (allHeld && allSameValue){

            setTenzies(true)
            
            // Using Bootstrap's JS API to show the modal
            const winModal = new window.bootstrap.Modal(modalRef.current)
            winModal.show()
        } else {
            
            setTenzies(false)
        }

    }, [dice])


    // Function changing held state of dice upon hold
    function holdDice(id){
        setDice(prevDice=> prevDice.map(
            dice => dice.id === id ? {...dice, isHeld: !dice.isHeld} : dice
        ))
    }

    // Function handling roll dice based on game won and dice held state
    function handleClick(){
        
        if (!tenzies){
        setDice( 
          prevDice => prevDice.map(
          dice=>  dice.isHeld ? dice : { ...dice, id: crypto.randomUUID(), value:Math.ceil(Math.random()*6)} ))
        }
        else{
            // This else block is handled by the Bootstrap modal's "New Game" button
            setTenzies(false)
            setDice(generateNewDice())
        }
    }


    // passing props to Dice component
    const diceElements = dice.map(diceObj=>(
       < Dice 
       key= {diceObj.id}
       id= {diceObj.id}
       value= {diceObj.value}
       isHeld= {diceObj.isHeld} 
       holdDice= {holdDice}/>
    ))

    

    return(

        <>
         
         <div className= "base-container">
                     <h1>Tenzies </h1>

                     <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

                     < div className="dice-container">
                        {diceElements}
                     </div>

                     <button className="roll-button" onClick={handleClick} > Roll </button>
         </div>



        {/* Bootstrap Modal */}

        <div className="modal fade" ref={modalRef} tabIndex="-1" aria-labelledby="winModalLabel" aria-hidden="true">

            
        {tenzies &&
        <Confetti
        width={window.innerWidth}
        height={window.innerHeight} />}

            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="winModalLabel">You Won!</h5>
                    </div>
                    <div className="modal-body">
                        Congratulations, you've won Tenzies!
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-primary" 
                            data-bs-dismiss="modal" 
                            onClick={handleClick}>New Game</button>
                    </div>
                </div>
            </div>
        </div>
       
        </>
    )
}