import { useState } from "react";

const ListRender = () => {
    const [list] =useState(["Jonathas", "Jefferson", "Junior", "João"]);
    const [users, setUsers] = useState([
        {id:1, name: "João", age: 66},
        {id:2, name: "Jonathas", age: 37},
        {id:3, name: "Jefferson", age: 36},
        {id:4, name: "João Jr", age: 35},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5);
        setUsers((prevUsers)=>{
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }
  return (
    <div>
        <h2>ListRender</h2>
        <ul> 
            {list.map((item, i) => (
            <li key={i}>{item}</li>
            ))} 
        </ul>
        <ul>
            {users.map((user) => (
                <li key={ user.id }>{ user.name } - { user.age }</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender;