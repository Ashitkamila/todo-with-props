import React, { useState } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

function TodoApp() {
    const [todo,setTodo]=useState([]);
    const [initialTodo,setInitialTodo]=useState({task:'',completed:false})
    return (
        <div>
             <AddTodo todo={todo} setTodo={setTodo} initialTodo={initialTodo} setInitialTodo={setInitialTodo}/>
             <TodoList  todo={todo} setTodo={setTodo}/>
        </div>
    )
}

export default TodoApp
