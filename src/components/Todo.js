import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../stylesheets/style.css';
import { faCheckCircle, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ text, todo, todoItems, setTodoItems, inputText, inputTextHandler }) => {

    const deleteHandler = () => {

        setTodoItems(todoItems.filter((el) => el.id !== todo.id));

    };

    const completeHandler = () => {

        setTodoItems(todoItems.map(item => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
            })
        );
    };

    const editHandler = () => {

        let newText = prompt('Edit:');

        if(newText != null){
            setTodoItems(todoItems.map(item => {
                if(item.id === todo.id){
                    return {
                        ...item, text: newText
                    }
                }
                return item;
                })
            );
        }
    };

    return(
            <div className="todo">
                
                <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
                <button onClick={completeHandler} className="complete">
                    <FontAwesomeIcon icon={faCheckCircle} />
                </button>
                <button onClick={editHandler} className="edit">
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button onClick={deleteHandler} className="delete">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                
            </div>
    );
}

export default Todo;