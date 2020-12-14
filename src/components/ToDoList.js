import React from 'react';
import ToDo from './ToDo';

function ToDoList({settodos, todos, filteredTodos}) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
            {filteredTodos.map((todo) => 
                <ToDo curr={todo} settodos={settodos} todos={todos} key={todo.id} text={todo.text} />
            )}
            </ul>            
        </div>
    );
}

export default ToDoList;
