import React,{useReducer,useContext} from 'react'
import _ from 'lodash'
import List from './List';

export const topicContext = React.createContext()
const InitialState = {
topic:'react',    
source:[
    {
        name:'angular',
        link:'https://google.com'
    },
    {
        name:'react',
        link:'https://google.com'
    },
    {
        name:'vue',
        link:'https://google.com'
    },
    {
        name:'node',
        link:'https://google.com'
    },
    {
        name:'java',
        link:'https://google.com'
    }
]
};
const topicReducer = (state,action) =>{
    switch(action.type){
        case 'topicSelect':
            return {...state,topic:action.value}
        case 'filter':
            
            let newList = _.filter(InitialState.source,['name',action.value])
            return {...state,source:newList}
        case 'reset':
            return InitialState
        default:
            return state
    }
}

function FilterReducerHookParent() {
    const[topic,dispatch] = useReducer(topicReducer,InitialState)
    
    return (
        <div>
            <select value={topic.topic} onChange={(e) =>dispatch({type:'topicSelect',value:e.target.value})}>
                <option value='angular'>Angular</option>
                <option value='react'>React</option>
                <option value='vue'>Vue</option>
                <option value='node'>Node</option>
                <option value='java'>Java</option>
            </select>
            <button onClick={() =>dispatch({type:'filter',value:topic.topic})}>Filter</button>
            <topicContext.Provider value={{topic:topic,dispatchFunc:dispatch}}>
            <List/>
            </topicContext.Provider>
        </div>
    )
}

export default FilterReducerHookParent
