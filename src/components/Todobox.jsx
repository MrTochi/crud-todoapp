import Todo from "./Todo"
import "../css/style.css"

export default function Todobox({todos,setTodos,setTodo}){
  const sorted=todos.slice().sort((a,b)=>Number(a.status)-Number(b.status))


    return <div className="todoBox">
    {sorted.map((item,index)=>{

      return  <Todo key={index} item={item} index={index} todos={todos} setTodos={setTodos} setTodo={setTodo} sorted={sorted}  />
        
    })}
    </div>
}