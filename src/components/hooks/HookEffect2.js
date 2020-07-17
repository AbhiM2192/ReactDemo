import React,{useState,useEffect} from 'react'

function HookEffect2() {
    const[coordinates,setCoordinates] = useState({x:0,y:0})

    const logMousePosition = (e) =>{
        console.log('mosue Event')
        setCoordinates({...coordinates,x:e.clientX,y:e.clientY})
    }
    useEffect(() =>{
        console.log('useEffect called')
        window.addEventListener('mousemove',logMousePosition)

        return () =>{
            console.log('component unounting code')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
    return (
        <div>
            The Mouse Position is X-{coordinates.x} , Y - {coordinates.y}
        </div>
    )
}

export default HookEffect2
