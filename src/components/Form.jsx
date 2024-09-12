
import "../css/style.css"
import { useState } from "react"
import Todobox from "./Todobox"
import Foot from "./Foot"
export default function Form(){

    let [todo,setTodo]=useState({todoName:``,status:false})
    let [todos,setTodos]=useState([])
    let [alertMessage, setAlertMessage] = useState("")//alert message for the user if the task already exists 
    
    const similarTodo=todos.some(function(todoObj){//check if the task already exists
        return todoObj.todoName===todo.todoName
        }
    )


    function submitIt(e){//
        e.preventDefault()
        if(todo.todoName.trim()===``){
         setAlertMessage("Please enter a Task")
        }
        else if(similarTodo){
        setAlertMessage("Task already exists")
        }
        else{
            setAlertMessage("")
            setTodos([...todos,todo])
            setTodo({todoName:``,status:false})
        }
        
    }

    // const sorted=todos.slice().sort((a,b)=>Number(a.status)-Number(b.status))

    
    return(
        <div>
            <h1 className="title">TO-DO APPLICATION</h1>
            <form action="" onSubmit={submitIt} className="form">
                <input className="input"  placeholder="Enter your tasks" type="text" onChange={(e)=>setTodo({todoName:e.target.value,status:false})} value={todo.todoName}/>
                <button className="button" type="submit">Add</button>
            </form>
            {<p className="alertText">{alertMessage}</p>}
        <Todobox todos={todos} setTodos={setTodos} setTodo={setTodo} />
         <Foot todos={todos}/>
        </div>
    ) 
}