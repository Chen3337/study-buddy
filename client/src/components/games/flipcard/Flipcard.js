import ReactDOM from "react-dom";
import ReactCardFlip from 'react-card-flip';
import React, { useState} from 'react';

const CardFlip = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!setIsFlipped);
    };
    return (
        <div>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div style={{backgroundColor : "red", height: 100 , color: "#fff", display: "flex", justifyContent: "center", alignItems: "center"}} >
            This is the front of the card.
            <button onClick={handleClick}>Click to flip</button>
          </div>
   
          <div style={{backgroundColor : "red" , height: 100 , color: "#fff",  display: "flex", justifyContent: "center", alignItems: "center"}}>
            This is the back of the card.
            <button onClick={handleClick}>Click to flip</button>
          </div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div style={{backgroundColor : "red", height: 100 , color: "#fff", display: "flex", justifyContent: "center", alignItems: "center"}} >
            This is the front of the card.
            <button onClick={handleClick}>Click to flip</button>
          </div>
   
          <div style={{backgroundColor : "red" , height: 100 , color: "#fff",  display: "flex", justifyContent: "center", alignItems: "center"}}>
            This is the back of the card.
            <button onClick={handleClick}>Click to flip</button>
          </div>
        </ReactCardFlip>

        </div>
      )

};

export default CardFlip;