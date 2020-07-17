import React,{useState,useEffect} from 'react'

function HookEffect1() {
    const initialCount = 0
    const[count,setCount] = useState(initialCount)
    const[name,setName] = useState('')

    useEffect(() =>{
        console.log('Updating Document title')
        document.title = `Clicke${count} times`
    },[count])
    return (
        <div>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={() =>setCount(prevCount => prevCount + 1)}>Clickd - {count} times</button>
        </div>
    )
}

export default HookEffect1
