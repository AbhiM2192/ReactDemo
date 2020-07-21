import React,{useState} from 'react'
import useDocumentTitle from './customHooks/useDocumentTitle'

function DocTitleHook1() {
    const [count,setCount] = useState(0)
    useDocumentTitle(count)
    return (
        <div>
            <h2>COunt -{count}</h2>
            <button onClick={() =>setCount(prevCount => prevCount +1)}>Count Increment</button>
        </div>
    )
}

export default DocTitleHook1
