import React from "react";

function Keypad (){
    function input(){
        console.log('Entering password...');
    }
   
    return (
        <div>
            <input id="input" type="password" onChange={input} />
        </div>
    )
}

export default Keypad;