import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router,Switch,Route,useRoutermatch,Link,withRouter} from 'react-router-dom';
import Topic from './Topic';

const StyledTopics = styled.div`
display:flex;
flex-flow:row wrap;
justify-content:space-evenly;
`;
const StyledTopic = styled.div`
    width:200px;
    height:200px;
    border:2px solid crimson;
    color:crimson;
    font-size:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    &:hover{
        background-color:crimson;
        color:white;
    }
`;
const StyledLink = styled(Link)`
    all:unset;
    color:inherit;
    cursor:pointer;
    
    
`;
const topics = [{id:1,name:'Angular'},{id:2,name:'React'},{id:3,name:'Node'}]
function Topics(props) {
    console.log(props)
    return (
        <Router>
            <StyledTopics>
            List of Topics:
                {
                    topics.map((t) =><StyledTopic key={t.id}><StyledLink to={`${props.match.url}/${t.name}`}>{t.name}</StyledLink></StyledTopic>)
                }
        </StyledTopics>
        <Route path={`${props.match.path}/:topicId`} component={Topic}/>
        </Router>
        
    )
}

export default withRouter(Topics)
