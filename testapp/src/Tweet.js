import React, { useState } from 'react';
import './App.css';

function Tweet({name, message}){

    const [isRed, setRed] = useState(false);
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    }

    const makeRed = () =>{
        setRed(true);
    }

    return(
        <div className="tweet">
            <h3>{name}</h3>
            <p>{message}</p>
            <button onClick={increment}>increment</button>
            <h1>{count}</h1>
            <h3 onClick={makeRed} className={isRed ? 'red' : ''}>Change my color</h3>
        </div>
    )
}

export default Tweet;