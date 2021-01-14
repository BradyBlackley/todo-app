import React from 'react'

const Form = ({ setInputText, todos, setTodos, inputText }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    //TODO: install package to generate unique id's
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText("");
    }
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                Add
            </button>
            <div className="select">
                <select name="todos" class="filter-todo">
                    <option value="all">All Tasks</option>
                    <option value="completed">Completed Tasks</option>
                    <option value="uncompleted">Uncompleted Tasks</option>
                </select>
            </div>
        </form>
    );
};

export default Form;