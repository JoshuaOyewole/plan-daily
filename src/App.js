import React from 'react';
import './App.css'
import AddTodo from './Components/AddTodo';
import Header from './Components/Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <div className='container'>
             <Header />
            <AddTodo /> 
            <Footer />
        </div>
    </div>
  )
}

export default App;
