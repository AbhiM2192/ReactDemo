import React,{useContext} from 'react'
import {topicContext} from './FilterReducerHookParent'

function List() {
    const listContext = useContext(topicContext)
    return (
        <div>
            <h2>List of topics with reference</h2>
            <div>
                {listContext.topic.source.map(s =>{
                    return(
                        <div key={s.name}>
                            <h3>{s.name}</h3>
                            <p>{s.link}</p>
                        </div>
                    )
                })}
            </div>
            <button onClick={() =>listContext.dispatchFunc({type:'reset'})}>Reset</button>
        </div>
    )
}

export default List
