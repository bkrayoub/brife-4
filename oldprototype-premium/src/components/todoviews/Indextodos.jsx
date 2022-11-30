import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Indextodos() {
    const [todos,setTodos] = useState([]);
   useEffect(()=>{
    async function echoData(){
        console.log('ok')
        const response = await axios.get('http://127.0.0.1:8000/api/select');
        console.log(response.data);
        setTodos(response.data);
    }
    echoData();

   },[]);
  return (
    <div>

    <Link to='/Addtodos'>new todos</Link>

    <div>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
            </thead>

            <tbody>
                {todos.map(Todo=>(
                    <tr key={Todo.id}>
                        <td>{Todo.id} </td>
                        <td>{Todo.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>


    </div>
  )
}

export default Indextodos