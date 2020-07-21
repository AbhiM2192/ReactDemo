import React from 'react'

function TitleUseCallBack() {
    console.log('rendering Title ')
    return (
        <div>
            <h2>Use Call Back Title</h2>
        </div>
    )
}

export default React.memo(TitleUseCallBack)
