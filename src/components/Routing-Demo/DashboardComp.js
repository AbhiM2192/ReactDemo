import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
background-color:white;
border-radius: 5px;
border: 2px solid purple;
font-size:2rem;
font-style:cursive;
color:purple;
width:200px;
&:hover{
    background-color:purple;
    color:white;
}
`;

export function DashboardComp({history}) {
    return (
        <div>
            <h2>This is a Dashboard Component</h2>
            <p>We provide tutorials for different Software languages. 
            Please click the button to visit Topis page</p>
            <Button onClick={() => history.push('/topics')}>Go to Topics</Button>
        </div>
    )
}

 
