import React, { useState } from 'react'
import TodoForm from './TodoForm'

// Create TodoList function
// Create addTodo function with "todo" as parameter.
// Create newTodos and pass in "todo" into an array and
// return previous states of todos using spread operator.
// Pass addTodo into TodoForm onSubmit prop

const TodoList = () => {
    const [todos, setTodos] = useState([])
    
    const addTodo = (todo) => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        console.log(...todos)
    }

    return (
        <div>
            <h1>Whats the plan for today</h1>
            <TodoForm onSubmit={addTodo} />
        </div>
    )
}

export default TodoList
