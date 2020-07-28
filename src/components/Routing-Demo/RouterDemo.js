import React from 'react'
import styled from 'styled-components';
import {Link,Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import {HomeComp as Home} from './HomeComp';
import {AboutComp as About} from './AboutComp';
import {DashboardComp as Dashboard} from './DashboardComp';
import Login from './Login';
import Topics from './Topics';
import ProtectedRoute from './ProtectedRoute';

const StyledUl = styled.ul`
display:flex;
justify-content:space-evenly;
background-color:purple;
list-style-type:none;
`;
const StyledLi = styled.li`
font-size:2rem;
color:white;
&:hover{
    background-color:white;
    color:purple;
}
`;
const StyledLink = styled(Link)`
    all:unset;
    color:inherit;
    cursor:pointer;
    
    
`;
function RouterDemo() {
    return (
        <Router>
            <StyledUl>
                <StyledLi><StyledLink to='/'>Home</StyledLink></StyledLi>
                <StyledLi><StyledLink to='/about'>About</StyledLink></StyledLi>
                <StyledLi><StyledLink to='/dashboard'>Dashboard</StyledLink></StyledLi>
                <StyledLi><StyledLink to='/topics'>Topics</StyledLink></StyledLi>    
            </StyledUl>

            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/dashboard' component={Dashboard}/>
                <ProtectedRoute path='/topics'>
                    <Topics/>
                </ProtectedRoute>
                
                <Route exact path='/login' component={Login}/>
            </Switch> 
        </Router>
    )
}

export default RouterDemo
