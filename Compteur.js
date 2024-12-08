import React, { useState } from 'react';
import './App.css';



function App() {
    
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count+1)
        
    }

    const decrement = () => {
        setCount(count-1)
        
    }
    const reset = () => {
        setCount(0)
        
    }

    return <>
        <h1 >Compteur : {count}</h1>
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement}>DECREMENT</button>
        <button onClick={reset}>RESET</button>

            </>


}



export default App;
