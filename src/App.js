import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './stylesheets/style.css';

function App() {
  
  const [inputText, setInputText] = useState('');
  const [todoItems, setTodoItems] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodoItems, setFilteredTodoItems] = useState([]);

  useEffect(() => {
    function filterHandler() {
      switch (status) {
        case 'completed':
          setFilteredTodoItems(todoItems.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodoItems(todoItems.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodoItems(todoItems);
          break;
      }
    }

    filterHandler();
  }, [todoItems, status]);

  return (
    <div>
      <header className="appTitle">
        <h1>Brady's Task List App</h1>
        <Form 
          inputText = {inputText}
          setInputText={setInputText} 
          todoItems={todoItems} 
          setTodoItems={setTodoItems}
          setStatus={setStatus} 
        />
      </header>
        
        <TodoList 
        setTodoItems={setTodoItems} 
        todoItems={todoItems}
        filteredTodoItems={filteredTodoItems}
        />
    </div>
  );
}

export default App;
