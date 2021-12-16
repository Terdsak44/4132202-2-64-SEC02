import React from 'react';

function genTable(peoples) {
    return peoples.map((people)=>{
        const {id,name:rname,age} = people;
        return (
            <tr>
                <td>{id}</td>
                <td>{rname}</td>
                <td>{age}</td>
            </tr>
        );
    });
}

function Databasetable() {
    const student =[{id:1,name:"est",age:20},{id:2,name:"mana",age:20}]
    return(
       <table><tbody>{genTable(student)}</tbody></table> 
    )
}

export default Databasetable