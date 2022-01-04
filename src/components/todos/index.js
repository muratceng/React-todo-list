import { useState , useEffect} from "react";
import List from "./list";
import Form from "./Form";
import Footer from "./Footer";

function Todos(){

    const [activeCategory, setActiveCategory] =useState("All");
    const [todos,setTodos] = useState([
        {
            id:"1",
            todo:"Learn Javascript",
            isChecked:true
        },
        {
            id:"2",
            todo:"Learn React",
            isChecked:false
        },
        {
            id:"3",
            todo:"Have a life!",
            isChecked:false
        }
    ]);

    const removeTodo = (id) => {
        const newTodos = todos.filter((todo)=> todo.id !== id);
        setTodos(newTodos);
    }

    const handleToggle = (id) => {
        const updatedTodo = todos.find((todo)=>todo.id === id);
        updatedTodo.isChecked = !updatedTodo.isChecked;
        const newTodos = todos.map((todo)=>todo.id === id ? updatedTodo:todo);
        setTodos(newTodos);

    }

    const categorizedTodos=
        activeCategory === "All"
        ?todos
        :activeCategory === "Active"
        ?todos.filter((todo)=> todo.isChecked === false)
        :todos.filter((todo)=> todo.isChecked === true);

    const categoryHandler = (category) => {
        setActiveCategory(category);
    }

    const clearCompleted = () =>{
        setTodos(todos.filter((todo)=> todo.isChecked===false));
    }


    useEffect(()=>{
        console.log(todos);
    },[todos])


    return (
    <div>
        <div className="todoapp">
            <Form addTodos={setTodos} todos={todos} />
            <List todos={categorizedTodos} removeTodo={removeTodo} handleToggle={handleToggle} />
            <Footer todos={categorizedTodos} categoryHandler={categoryHandler} activeCategory={activeCategory} clearCompleted={clearCompleted} />
        </div>
    </div>
    )
    
}

export default Todos;

