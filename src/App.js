import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './stylesheets/style.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <header className="appTitle">
        <h1>Brady's Task List App</h1>
        <Form 
        inputText = {inputText}
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos} 
        />
      </header>
        
        <TodoList 
        setTodos={setTodos} 
        todos={todos}
        />
    </div>
  );
}

export default App;
