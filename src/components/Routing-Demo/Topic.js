import React from 'react'
import {useParams} from 'react-router-dom';
function Topic() {
    //console.log(props)
    let {topicId} = useParams()
    return (
        <div>
            Welcome to  Page {topicId}
        </div>
    )
}

export default Topic
