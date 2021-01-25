import React, {useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for(let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }
    // [ALWAYS USE PREV STATE TO AVOID RESETTING CURRENT VALUE TO INITIAL VALUE]

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            {/*<button onClick={() => setCount(count + 1)}>Increment</button> */}
            {/*<button onClick={() => setCount(count - 1)}>Decrement</button>*/}
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}