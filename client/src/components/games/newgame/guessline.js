import React from 'react';

function Guessline(props){
    var guessing = props.guessStatus;
    return (
        <div style={{width: "100%", height: "40px", textAlign:"center"}}>
            <div style={{margin:"auto", height: "40px", display: "inline-block"}}>
            {guessing.map(letter => (
                <div style={{float: "left", width:"20px", height: "20px"}}>
                  <b>{letter}</b>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Guessline;