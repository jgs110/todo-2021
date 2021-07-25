import React, { useState } from 'react'

// Create Form & Submit Button.
// Create handleSubmit function and pass into onSubmit property in form tag.
// Create handleChange function and set the input text to input from useState hook. 
// and pass into onChange in input tag.

const TodoForm = (props) => {
    const [input, setInput] = useState("")

    const handleChange = e => {
      setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
/*
        props.onSubmit({
            id: Math.floor(Math.random() * 10000), 
            text: input
        })

*/
       setInput('')
    }
     return (
        <form className="todo-form" onSubmit={handleSubmit}>
        <input type="text" 
            placeholder="Add a todo" 
            value={input} 
            name="text" 
            className="todo-input"
            onChange={handleChange} />
            <button className="todo-button" >Add Todo</button>
        </form>
    )
}

export default TodoForm
