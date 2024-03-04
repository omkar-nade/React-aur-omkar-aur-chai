import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

function AddTodos() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodohandler = (e) =>{
      e.preventDefault()
      // dispatch reducer ko use karke store ke under values ko change karata hai
      dispatch(addTodo(input))
      setInput('')
    }

  return (
    <>
    <form onSubmit={addTodohandler} >
        <input
        type='text'
        placeholder='Enter a todo'
        value={input}
        onChange={ (e) => setInput(e.target.value)}
        />
        <button
        type='submit'
        >Add Todo</button>
    </form>
    </>
  )
}

export default AddTodos

