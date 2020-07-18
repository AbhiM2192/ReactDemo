import React,{useReducer} from 'react'

const initialState = {
    firstName: 'Abhishek',
    
    inputVal:''
}
const reducer = (state,action) =>{
    switch(action.type){
        case 'changeName':
            if(action.value){
                return {...state,inputVal:action.value}
            }else{
                return state
            }
            
        case 'getName':
            if(action.value){
                return {...state,firstName:action.value}
            }else{
                return state
            }
        case 'reset':
            return initialState
        default:
            return state
    }
}
function CounterReducerHook2() {
    const [count,dispatch]  = useReducer(reducer,initialState)
    return (
        <div>
            <input type='text' value={count.inputVal} onChange={(e) =>dispatch({type:'changeName',value:e.target.value})}/>
            <h2>{count.firstName}</h2>
            <button onClick={() =>dispatch({type:'getName',value:count.inputVal})}>Change</button>
            <button onClick={() =>dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}

export default CounterReducerHook2
