import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const initialState ={
    loading:true,
    error:'',
    post:{}
}
const reducer = (state,action) =>{
    switch(action.type){
        case 'success':
            return {...state,loading:false,error:'',post:action.value}
        case 'error':
            return {...state,loading:false,error:action.value,post:{}}
        default:
            return state
    }
}
function DataFetchReducer() {
    const[state,dispatch] = useReducer(reducer,initialState)
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response =>{
                dispatch({type:'success',value:response.data})
            })
            .catch(error =>{
                dispatch({type:'error',value:error})
            })
    },[])
    return (
        <div>
            {state.loading ? (<h1>Loading...</h1>) : (<h2>{state.post.title}</h2>)}
            {state.error ? (<h1>Something went wrong...</h1>) : null}
        </div>
    )
}

export default DataFetchReducer
