import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Form = ({ setInputText, todoItems, setTodoItems, inputText, setStatus }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    //TODO: install package to generate unique id's
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodoItems([
            ...todoItems, 
            {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText('');
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <FontAwesomeIcon icon={faPlusCircle} />
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All Tasks</option>
                    <option value="completed">Completed Tasks</option>
                    <option value="uncompleted">Uncompleted Tasks</option>
                </select>
            </div>
        </form>
    );
};

export default Form;