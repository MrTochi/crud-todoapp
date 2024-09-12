import { useState } from "react"
import "../css/style.css"
export default function Todo({item,index,todos,setTodos,setTodo}){
  const [isEditing, setIsEditing] = useState(false);
const [editedText, setEditedText] = useState(item.todoName);




    function deleteIt(){
      let  todosret=todos.filter(function(rettodo,retIndex){
            return retIndex !== index
            
        })
        setTodos(todosret)
    }

  

   function checker(){//function to check the task if it is done or not
    let newTodos=todos.map(function(todoObj,todoIndx){
      if(todoIndx===index){
        return { ...todoObj, status: !todoObj.status }
      }
      return todoObj
    })
    setTodos(newTodos)
   
   }
   

   function editIt() {
    
    if (isEditing) {
      // Save the edited todo
      const editedTodo = todos.map((todoObj, todoIndx) => {
        if (todoIndx === index) {
          return { ...todoObj, todoName: editedText };
        }
        return todoObj;
      });
      setTodos(editedTodo);
      setIsEditing(false);
    } else {
      // Enter edit mode
      setIsEditing(true);
    }
  }


    
   return (
    <div className="todo">
     <span className="text-check">
     <input
      type="checkbox"
      checked={(item.status)}
      onChange={checker}
    />
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="saveInput"/>
      ) : (
        
        <p
          onClick={checker}
          style={{
            textDecoration: item.status ? `line-through` : `none`,
            color: item.status ? 'red' : 'inherit',
            cursor: "pointer"
          }}
        >
          {item.todoName}
        </p>
      )}
     </span>
      <span className="buttonBox">
        <button onClick={deleteIt} className="delete">x</button>
        <button onClick={editIt} className="edit">
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </span>
    </div>
  )}