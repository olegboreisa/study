import React, {useState} from 'react'

export default () => {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([... items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                    )
                )}
            </ul>
        </div>
    )
}

// [IN CLASSES COMPONENTS, STATE IS ALWAYS AN OBJECT]
// [IN FUNCTIONAL COMPONENTS, STATE DOES NOT HAVE TO BE AN OBJECT]