import React,{useState} from 'react'

function HookCounter4() {
    const [items,setItems] = useState([])
    const [userInput,setUserInput] = useState('')
    const addItem = (e) =>{
        e.preventDefault();
        setItems([...items,{
            id:items.length,
            value:userInput
        }])
        setUserInput('')
    }
    return (
        <div>
            <input type='text' value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
            <button onClick={addItem} type='submit'>Add a Item</button>
            <ul>
                {
                    items.map(item => <li key={item.id}>{item.value}</li>)
                }
            </ul>
        </div>
    )
}

export default HookCounter4
