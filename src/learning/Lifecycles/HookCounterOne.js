import React, {useEffect, useState} from 'react'

export default () => {

    const [count, setCount] = useState (0)
    const [name, setName] = useState ('')

    useEffect(() => {
        console.log('usEffect - Updating document title')
        document.title = `You clicked ${count} times`
    },[count])

    // useEffect [RUNS AFTER EVERY RENDER OF COMPONENT]
    // second parameters accepts props or state [ENTER A STATE AT WHICH useEffect SHOULD BE TRIGGERED]

    return (
        <div>
            <input type={"text"} value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count +1)}>Click {count}</button>
        </div>
    )
}