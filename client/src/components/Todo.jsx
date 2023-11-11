/* eslint-disable no-undef */
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo, updateTodo } from "../redux/actions";
import { deleteTodo } from "../redux/actions";

function Todo({todo}) {

    const dispatch = useDispatch()
  return (
    <>
      <li className='task' onClick={()=>dispatch(toggleTodo(todo._id)) }>
        <span>{todo.data}</span>
        <span className='icon'><i className='fas fa-trash'/></span>
        <span className='icon'><i className='fas fa-pen'/></span>
      
      </li>
    </>
  )
}

export default Todo
