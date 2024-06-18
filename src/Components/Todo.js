import React from 'react'
import DelItem from './DelItem'
import './TodoList.css'

function Todo() {

  const todoArray = JSON.parse(localStorage.getItem('todos')); 

    return (
        <div className='todo__list'>
            <h2 className='secondary-header' >Todo List</h2>
            <ul className='todo__item' style={{'listStyleType' : 'none'}}>
{Boolean(todoArray) && Array.isArray(todoArray) && todoArray.length >0 ? todoArray.map(
            (cur, index) => <li key={index} className='item' id={`id-${index}`}> {cur} <DelItem /></li>
          ) : <p>Todo is currently Empty</p>}
            </ul>
        </div>  
    )
}

export default Todo
