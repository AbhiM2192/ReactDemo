import React,{useState} from 'react'
import HookEffect2 from './HookEffect2'

function MouseContainer() {
    const[display,setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Togle Display</button>
            {display && <HookEffect2/>}
        </div>
    )
}

export default MouseContainer
