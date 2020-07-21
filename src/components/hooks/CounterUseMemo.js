import React,{useState,useMemo} from 'react'


function CounterUseMemo() {
    const[counter1,setCounter1] = useState(0)
    const[counter2,setCounter2] = useState(0)

    const increment1 = () =>{
        setCounter1(counter1 + 1)
    }
    const increment2 = () =>{
        setCounter2(counter2 + 2)
    }
    const isEven = useMemo(() =>{
        let i = 0
        while(i<2000000000) i++
        return counter1 %2 ===0
    },[counter1])
    return (
        <div>
          <div><button onClick={increment1}>Counter1 -{counter1}</button><span>{isEven ? 'even' :'odd'}</span></div>
          <div><button onClick={increment2}>Counter2 -{counter2}</button></div>  
        </div>
    )
}

export default CounterUseMemo
// UseCallBack - Caches the function reference
// useMemo - Caches the function result and it invokes the function .