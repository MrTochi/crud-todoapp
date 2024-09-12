
import "../css/style.css"
export default function Foot({todos}){
    
    let completed=todos.filter(function(todo){
        return todo.status
    })

    let notcompleted=todos.filter(function(todo){
        return !todo.status
    })
    
    return <div className="foot">
         <div className="foot-item-left">
            <p>Tasks:</p>
            <h3>{todos.length}</h3>
        </div>

        <div className="foot-item-centre">
            <p>Not-Completed:</p>
            <h3>{notcompleted.length}</h3>
        </div>

        <div className="foot-item-right">
            <p>Completed:</p>
            <h3>{completed.length}</h3>
        </div>
    </div>
}