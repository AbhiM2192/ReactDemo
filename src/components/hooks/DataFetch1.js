import React,{useState,useEffect} from 'react'
import axios from 'axios'
function DataFetch1() {
    const [data,setData] = useState({loading:true,error:'',post:{}})
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response =>{
                setData({...data,loading:false,error:'',post:response.data})
            })
            .catch(error =>{
                setData({...data,loading:false,error:error,post:{}})
            })
    },[])
    return (
        <div>
            {data.loading ? (<h1>Loading...</h1>) : (<h2>{data.post.title}</h2>)}
            {data.error ? (<h1>Something went wrong...</h1>) : null}
        </div>
    )
}

export default DataFetch1
