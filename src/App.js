import React from 'react';
import './App.css'
import AddTodo from './Components/AddTodo';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
        <div className='container'>
            <Header />
            <AddTodo />
        </div>
    </div>
  )
}

export default App;
