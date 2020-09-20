import React, { useState } from 'react'
import Todo from './Todo'
import './addTodo.css'

function AddTodo() {
    const [newItem, setNewItem] = useState('');
    const [lists, setLists] = useState([]);

    const prevTodos = JSON.parse(localStorage.getItem('todos'));
    
        const addTodo = (e) =>{
            //Prevent Default form submission
            e.preventDefault();
            //Add newItem to prevTodos
            lists.push(newItem);
           //update the list state
             setLists(lists) 
             //Save to localstorage
             saveTodo();
            //Empty the newItem field
            setNewItem('')
        }


    const saveTodo = () =>{          
        //Check if there is a todo in localStorage and retrieve
            if (prevTodos !== null /* && prevTodos.length > 0 */) { 
                prevTodos.push(newItem)
                localStorage.setItem('todos', JSON.stringify(prevTodos))      
            }

            else{
                localStorage.setItem('todos', JSON.stringify(lists)) 
            }
    }

    return (
        <>
            <div className='add_todo'>
                <form onSubmit={addTodo} className='todo_form'>
                    <input 
                        type='text' 
                        name='todo' 
                        value={newItem} 
                        onChange={(e)=>{setNewItem(e.target.value)}}
                        placeholder='Enter a Todo...'
                        required
                    />
                    <button type='submit'>Add Item </button>
                </form>
            </div>
            <Todo /> 
        </>
    )
}

export default AddTodo
