import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './stylesheets/style.css';

function App() {
  
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    function filterHandler() {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }

    filterHandler();
  }, [todos, status]);

  return (
    <div>
      <header className="appTitle">
        <h1>Brady's Task List App</h1>
        <Form 
          inputText = {inputText}
          setInputText={setInputText} 
          todos={todos} 
          setTodos={setTodos}
          setStatus={setStatus} 
        />
      </header>
        
        <TodoList 
        setTodos={setTodos} 
        todos={todos}
        filteredTodos={filteredTodos}
        />
    </div>
  );
}

export default App;
