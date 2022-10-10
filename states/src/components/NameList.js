import React from 'react'
import Person from './Person'

function NameList() 
{

const names=['bruce','clark','Diana']
const nameList= names.map((name) =><h2>{name}</h2>)

const persons =
[
    {
id:1,
name:'bruce',
age:30,
skill:'react'
    },
    {
id:2,
name:'Clark',
age:24,
skill:'react',
    },
    {
id:3,
name:'Diana',
age:10,
skill:'react'
    },
    {
id:4,
name:'BOb',
age:30,
skill:'react'
    },
    {
id:5,
name:'gib',
age:30,
skill:'angular'
    },
]
const personList= persons.map(person => (<Person person={person}></Person>
))
  return (
    <div>
        <div>{personList}</div>
        <div>{nameList}</div>
    </div>
        )
}

export default NameList