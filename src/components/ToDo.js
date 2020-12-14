import React from 'react';

function ToDo({curr, settodos, todos, text}) {
    //event handlers
    const deleteHandler = () =>{
        // removes the current value from the list by creating new list without the current element
        settodos(todos.filter((el) => el.id !== curr.id));
    };

    const completeHandler = () =>{
        settodos(todos.map((item) => 
            {
                if(item.id === curr.id)
                    return {...item, completed:!item.completed }
                return item;
            }
        ));
    }

    return (
        <div className="todo">
           <li className={`todo-list ${curr.completed ?"completed":""}`}>{text}</li>
           <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
           <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default ToDo;
