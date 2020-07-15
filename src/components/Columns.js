import React from 'react'

function Columns() {
    const styles={
        td :{
            border:'1px solid red'
        }
    }
    return (
        <React.Fragment>
            <td style={styles.td}>Name</td>
            <td style={styles.td}>Abhishek</td>
        </React.Fragment>
    )
}

export default Columns
