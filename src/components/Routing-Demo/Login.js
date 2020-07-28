import React,{useState} from 'react';
import styled from 'styled-components';
import FakeAuth from './FakeAuth';
import {useHistory,useLocation} from 'react-router-dom';
import {PropTypes} from 'prop-types';

const StyledDiv = styled.div`
display:flex;
flex-direction: column;
align-items:center;
width:500px;

border:2px solid DarkBlue;
border-radius:5px;
margin: 10px auto;
`;

const StyledInput = styled.input`
width:495px;
border:2px solid DarkBlue;
border-radius:5px;
margin: 11px;
height: 51px;
`;
const Button = styled.button`
background-color:white;
border-radius: 5px;
border: 2px solid DarkBlue;
font-size:2rem;
font-style:cursive;
color:DarkBlue;
width:200px;
&:hover{
    background-color:DarkBlue;
    color:white;
}
`;
function Login() {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();
    const location = useLocation();
    let {from} = location.state || {from:{pathname:'/'}};
    
    const handleLogin = () =>{
        FakeAuth.authenticate(() =>{
            console.log(from)
            history.replace(from);
        })
    }
    return (
        <>
            <h2>Please Login before procedding Ahead to ${from.pathname}</h2>
            <StyledDiv>
                <StyledInput type='text' placeholder='UserName' value={name} onChange={(e) => setName(e.target.value)}/>
                <StyledInput type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button onClick={handleLogin}>Login</Button>
            </StyledDiv>
        </>
    )
}
Login.propTypes ={
    name:PropTypes.string,
    password:PropTypes.string
}
export default Login
