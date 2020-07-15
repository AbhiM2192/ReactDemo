import React from 'react';

// function Greet(){
//     return <h1>Hello Abhishek</h1>
// }

const Greet = ({name,children}) => 
{
    return(
        <div>    
            <h1>Hello {name} </h1>
            {children}
        </div> 
    )
   
}

export default Greet;