import React from 'react'

function Footer({ todos , categoryHandler , activeCategory , clearCompleted }) {
    const activeTodos = todos.filter((todo) => todo.isChecked === false);

    return (
        <div className='footer'>
            <span className='todo-count'>
                <strong>{activeTodos.length}</strong>
                item{activeTodos.length > 1 && "s"} left

            </span>

            <ul className='filters'>
                <li onClick={()=>categoryHandler("All")}>
                    <a className={activeCategory === "All" ? "selected" : null } >All</a>
                </li>
                <li onClick={()=>categoryHandler("Active")}>
                    <a className={activeCategory === "Active" ? "selected" : null}>Active</a>
                </li>
                <li onClick={()=>categoryHandler("Completed")}>
                    <a className={activeCategory === "Completed" ? "selected" : null }>Completed</a>
                </li>
            </ul>

            {todos.some((todo)=> todo.isChecked === true )&&
            (<button className='clear-completed' onClick={clearCompleted}>
                Clear Completed
            </button>)}
            
        </div>
    )
}

export default Footer
