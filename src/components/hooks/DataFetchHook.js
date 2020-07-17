import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetchHook() {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [IdButton,setIdButton] = useState(1)
    const handleClick = () =>{
        setIdButton(id)
    }
    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response =>{
                console.log(response)
                setPost(response.data)
            })
            .catch(error =>{
                console.log(error)
            })
    },[IdButton])
    return (
        <div>
            <input type='text' placeholder='Enter the post ID to fetch' value={id} onChange={(e) =>setId(e.target.value)} />
            <button type='button' onClick={handleClick}>Fetch Post</button>
            {/* <ul>
                {
                    post.map(p => <li key={p.id}>{p.title}</li>)
                }
            </ul>  */}
            <h2>{post.title}</h2>
        </div>
    )
}

export default DataFetchHook
