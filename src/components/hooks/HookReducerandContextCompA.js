import React,{useContext} from 'react'
import {CountContext} from './HookReducerandContextCompParent'

function HookReducerandContextCompA() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component A
            <button onClick={() =>countContext.CountDispatch({type:'increment'})}>Increment</button>
            <button onClick={() =>countContext.CountDispatch({type:'decrement'})}>Decrement</button>
            <button onClick={() =>countContext.CountDispatch({type:'reset'})}>Reset</button>
        </div>
    )
}

export default HookReducerandContextCompA
