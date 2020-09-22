import React from 'react'

function EditTodo(props) {

    const editTodo =(e) =>{
        const parentItem = e.target.parentNode
        const childItem = e.target.parentNode;
        const todos = JSON.parse(localStorage.getItem('todos'));
        
        //Edit todo from localStorage
        eeditTodo(childItem,todos);
    }

    const eeditTodo = (todo,todosArr) =>{
        const todoID = todo.id;
        const id = todoID.split('-')[1];
        
       /*  todosArr.splice(id,1);
        localStorage.setItem('todos', JSON.stringify(todosArr)) */
    }

    return (
          <i style={{color: '#102249'}} onClick={editTodo} className="far fa-edit"></i>
    )
}

export default EditTodo
