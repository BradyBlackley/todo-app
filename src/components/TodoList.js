import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoItems, setTodoItems, filteredTodoItems }) => {
    return (
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodoItems.map((todo) => (
                        <Todo 
                            setTodoItems={setTodoItems}
                            todoItems={todoItems} 
                            text={todo.text}
                            todo={todo} 
                            key={todo.id}
                        />
                    ))}
                </ul>
            </div>
    );
};

export default TodoList;