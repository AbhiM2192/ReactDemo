import React,{useState,useEffect,useRef} from 'react'

function TimerUseRef() {
    const [seconds,setSeconds] = useState(0)
    const [minutes,setMinutes] = useState(0)
    const [hours,setHours] = useState(0)
    const intervalRef = useRef()
    const time = () =>{
        setSeconds(prevCount => prevCount +1)
        if(seconds > 60){
            setMinutes(prevCount => prevCount +1)
            setSeconds(0)
        }
        if(minutes>60){
            setHours(prevCount => prevCount +1)
            setMinutes(0)
            
        }
        if(hours>24){
            setHours(0)
        }
    }
    const resetTimer = () =>{
        clearInterval(intervalRef.current)
        setSeconds(0)
        setMinutes(0)
        setHours(0)
        
    }
    const startTimer = () =>{
        intervalRef.current = setInterval(time,1000)
    }
    useEffect(() =>{
         intervalRef.current = setInterval(time,1000)

        return () =>{
            clearInterval(intervalRef.current)
        }
    },[seconds,minutes,hours])
    return (
        <div>
            {hours}:{minutes}:{seconds}
            <button onClick={() =>clearInterval(intervalRef.current)}>Stop</button>
            <button onClick={() =>resetTimer()}>Reset</button>
            <button onClick={() =>startTimer()}>Start</button>
        </div>
    )
}

export default TimerUseRef
