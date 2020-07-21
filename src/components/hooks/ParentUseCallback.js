import React,{ useState,useCallback } from 'react'
import TitleUseCallBack from './TitleUseCallBack'
import CountUseCallback from './CountUseCallback'
import ButtonUseCallback from './ButtonUseCallback'

function ParentUseCallback() {
    const [age, setAge] = useState(28)
    const [salary, setSalary] = useState(30000)

    const incrementAge = useCallback(() =>{
        setAge(age +1)
    },[age])
    const incrementSalary = useCallback(() =>{
        setSalary(2*salary)
    },[salary])
    return (
        <div>
            <TitleUseCallBack/>
            <CountUseCallback text={'Age'} count={age}/>
            <ButtonUseCallback handleclick={incrementAge}>Increment Age</ButtonUseCallback>
            <CountUseCallback text={'Salary'} count={salary}/>
            <ButtonUseCallback handleclick={incrementSalary}>Increment Salary</ButtonUseCallback>
        </div>
    )
}

export default ParentUseCallback
