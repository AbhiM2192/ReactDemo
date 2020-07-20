import React from 'react'
import Person from './Person'

function NameListComponent() {
    //const names = ['Abhishek','Maheshwari','Biyani']
    const persons = [
        {
            name:'Abhishek',
            age:'27',
            skill:'SD',
            id:1
        },
        {
            name:'Maheshwari',
            age:'28',
            skill:'SD',
            id:2
        },
        {
            name:'Biyani',
            age:'29',
            skill:'SD',
            id:3
        }
    ]
    // const nameList = names.map((name) =>{
    //     return <h2>{name}</h2>
    //     })
    const personList = persons.map(person => <Person key={person.id} person={person}/>)
    return (
        <div>
            {
                personList
            }
        </div>
    )
}

export default NameListComponent
