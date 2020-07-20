import React,{useReducer} from 'react'
import HookReducerandContextCompB from './HookReducerandContextCompB'
import HookReducerandContextCompA from './HookReducerandContextCompA'
import HookReducerandContextCompC from './HookReducerandContextCompC'


 export const CountContext = React.createContext()

 const initialCount = 0
const reducer = (state,action) => {
    switch(action.type){
        case 'increment':
            return state +1
        case 'decrement':
            return state -1
        case 'reset':
            return initialCount
        default:
            return state
        }
}


function HookReducerandContextCompParent() {
     const[count,dispatch] = useReducer(reducer,initialCount)
    return (
        <CountContext.Provider value={
            {countState:count, 
            CountDispatch:dispatch
            }
            }>
        <div>
            
            count -{count}
            <HookReducerandContextCompA/>
            <HookReducerandContextCompB/>
            <HookReducerandContextCompC/>
           
            
            
        </div>
        </CountContext.Provider>
    )
}

export default HookReducerandContextCompParent
