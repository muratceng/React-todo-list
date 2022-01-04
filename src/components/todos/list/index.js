import React from "react";

function List({ todos , removeTodo , handleToggle }){
   


    return( 
    <div>
        <ul className="todo-list">
            {
                todos.map((todo,i)=> (
                <li key={i} className={todo.isChecked===true ? "completed" : null }>
                    <div className="view">
                        <input
                        className="toggle"
                        type="checkbox"
                        onClick={(event)=>{
                            if(event.target.className==="toggle") handleToggle(todo.id)}
                        }

                        />
                        <label>{todo.todo}</label>
                        <button
                        className="destroy"
                         onClick={()=>removeTodo(todo.id)}
                        />
                    </div>
                </li>
                ))
            }
        </ul>
    </div>
    )

}

export default List;    