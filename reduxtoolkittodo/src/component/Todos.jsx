import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
     const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    // console.log(todos)

  return (
    <>
    {/* <div>Todos</div>
    {todos.map((todo) => (
        <li key={todo.id}>
            {todo.text}
            <button
            onClick={() => dispatch(removeTodo(todo.id))}
            >X</button>
        </li>
    ))} */}

<div style={{ marginBottom: '10px', fontSize: '20px', fontWeight: 'bold' }}>Todos</div>
<ul style={{ listStyleType: 'none', padding: 0 }}>
  {todos.map((todo) => (
    <li key={todo.id} style={{ marginBottom: '10px', position: 'relative' }}>
      {todo.text}
      <button
        onClick={() => dispatch(removeTodo(todo.id))}
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          padding: '5px 10px',
          backgroundColor: '#dc3545',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        X
      </button>
    </li>
  ))}
</ul>
f
    </>

  )
}

export default Todos