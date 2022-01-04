import React,{useState} from 'react'
import {v4 as uuid} from "uuid"


function Form({addTodos,todos}) {
    const [value,setValue]=useState("");

    const onFormSubmit = (e) =>{
        e.preventDefault();
        if(value===""){
            return false
        }
        const todo = {
            id:uuid(),
            todo:value,
            isChecked:false
        }
        addTodos([...todos,todo])
        setValue("")
    }
    return (
        <header className='header'>
            <h1>todos</h1>
            <form onSubmit={onFormSubmit}>
                <input placeholder='what needs to be done' 
                className='new-todo' 
                name='todo'
                value={value} 
                onChange={(e)=> setValue(e.target.value)}/>
            </form>
        </header>
    )
}

export default Form
