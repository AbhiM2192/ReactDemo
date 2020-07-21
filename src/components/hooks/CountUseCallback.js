import React from 'react'

function CountUseCallback({text,count}) {
    console.log(`Rendering ${text}`)
    return (
        <div>
            {text} -{count}
        </div>
    )
}

export default React.memo(CountUseCallback)
