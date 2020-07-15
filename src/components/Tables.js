import React from 'react'
import Columns from './Columns'
import './AppStyles.css'

function Tables() {
    const styles={
        table :{
            border:'1px solid red'
        }
    }
    return (
        <table style={styles.table}>
            <tbody>
                <tr style={styles.table}>
                    <Columns/>
                </tr>
            </tbody> 
        </table>
    )
}

export default Tables
