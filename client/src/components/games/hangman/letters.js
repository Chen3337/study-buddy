import React from 'react';

function Letters(props){
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    return (
        <div style={{pointerEvents: props.pointerEvent, width: "100%", height: "44px"}}>
            {letters.map(letter => (
                <div key={letter} style={{float: "left", border: "solid black 1px", width:"20px", height: "20px"}} onClick={() => {props.handleClick(letter)}}>
                    {letter}
                </div>
            ))}
        </div>
    )
}

export default Letters;