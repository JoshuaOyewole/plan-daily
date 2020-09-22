import React from 'react'

function DelItem(props) {

    const delItem =(e) =>{
        const parentItem = e.target.parentNode.parentNode;
        const childItem = e.target.parentNode;
        parentItem.removeChild(childItem)
        const todos = JSON.parse(localStorage.getItem('todos'));
        
        //Remove todo from localStorage
        removeTodo(childItem,todos);
        console.log('Deleted an Item');
    }

    const removeTodo = (todo,todosArr) =>{
        const todoID = todo.id;
        const id = todoID.split('-')[1];
        
        todosArr.splice(id,1);
        localStorage.setItem('todos', JSON.stringify(todosArr))
    }

    return (
          <i style={{color: 'red'}} onClick={delItem} className="fas fa-trash"></i>
    )
}

export default DelItem
