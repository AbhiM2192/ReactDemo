import React,{useContext} from 'react'
import {CountContext} from './HookReducerandContextCompParent'

function HookReducerandContextCompD() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component D
            <button onClick={() =>countContext.CountDispatch({type:'increment'})}>Increment</button>
            <button onClick={() =>countContext.CountDispatch({type:'decrement'})}>Decrement</button>
            <button onClick={() =>countContext.CountDispatch({type:'reset'})}>Reset</button>
        </div>
    )
}

export default HookReducerandContextCompD
