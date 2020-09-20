import React from 'react'
import DelItem from './DelItem'
import './TodoList.css'

function Todo() {
    if(localStorage.length > 0){
         //Retrieves todo from localStorage and convert to an array
          const todo = JSON.parse(localStorage.getItem('todos')); 
           //map through todo array and render each todo
          var todoList = todo.map(
            (cur, index) => <li key={index} className='item' id={`id-${index}`}> {cur} <DelItem /></li>
          )
    }

    return (
        <div className='todo__list'>
            <h2 className='secondary-header' >Todo List</h2>
            <ul className='todo__item' style={{'listStyleType' : 'none'}}>
                {todoList}  
            </ul>
        </div>  
    )
}

export default Todo
