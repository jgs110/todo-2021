import React, { useState, useEffect, useRef } from 'react'
// Create Form & Submit Button.
// Create handleSubmit function and pass into onSubmit property in form tag.
// Create handleChange function and set the input text to input from useState hook. 
// and pass into onChange in input tag.

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : "")
    
    // When the page renders focus is set to input
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
      setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000), 
            text: input
        })

       setInput('')
       
    }
     return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm
