import React from 'react'
import TodoItem from './TodoItem';


function TodoList({todos ,onUpdate, onDelete}) {
    if(todos.length===0){
return (
  <p className="empty-message">
    No todos yet.
    <br />
    Add some jobs, man you can not be idle!
  </p>
);
    }
  return (
    <div className='todo-list'>
      {todos.map((todo)=>(
        <TodoItem 
        key = {todo._id}
        todo={todo}
        onUpdate= {onUpdate}
        onDelete ={onDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;
