import React,{useReducer} from 'react'
import _ from 'lodash'


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
            console.log(action.value)
            const newList = _.filter(state.source,['name',action.value])
            return {...state,source:newList}
        default:
            return InitialState
    }
}
const sourceReducer = (state,action) =>{
    
    switch(action.type){
        
        default:
            return InitialState
    }
}
function MultipleReducerHook3() {
    const[topic,dispatch] = useReducer(topicReducer,InitialState)
    const [source,dispatchTwo] = useReducer(sourceReducer,InitialState)
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
            <h2>List of topics with reference</h2>
            <div>
                {topic.source.map(s =>{
                    return(
                        <div key={s.name}>
                            <h3>{s.name}</h3>
                            <p>{s.link}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MultipleReducerHook3
