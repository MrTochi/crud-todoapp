import Todo from "./Todo"
import "../css/style.css"

export default function Todobox({todos,setTodos,setTodo,sorted}){
    return <div className="todoBox">
    {todos.map((item,index)=>{

      return  <Todo key={index} item={item} index={index} todos={todos} setTodos={setTodos} setTodo={setTodo}  />
        
    })}
    </div>
}