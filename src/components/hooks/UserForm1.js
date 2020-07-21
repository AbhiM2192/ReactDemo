import React,{useState} from 'react'
import useInput from './customHooks/useInput'

function UserForm1() {
    // const [name,setName] = useState({firstName:'',lastName:''})
    const [firstName,setfirstName,resetfirstName] =useInput('')
    const [lastName,setlastName,resetlastName] =useInput('')
    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(`form Data -${firstName} .....${lastName}`)
        resetfirstName()
        resetlastName()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input 
                        type='text' 
                        name='firstName' 
                        {...setfirstName}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input 
                        type='text' 
                        name='lastName' 
                        {...setlastName}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm1
