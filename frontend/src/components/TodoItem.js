import React, { useState } from "react";

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);

  const handleUpdate = async () => {
    await onUpdate(todo._id, {
      title: editTitle,
      description: editDescription,
      completed: todo.completed,
    });
    setIsEditing(false);
  };
  const toggleComplete = async () => {
    await onUpdate(todo._id, {
      ...todo,
      completed: !todo.completed,
    });
  };

  if (isEditing) {
    return (
      <div className="todo-item editing">
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <textarea
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          rows="2"
        />
        <button onClick={handleUpdate}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    );
  }

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleComplete}
        />
        <div className="todo-text">
          <h3>{todo.title}</h3>
          {todo.description && <p>{todo.description}</p>}
        </div>
      </div>
      <div className="todo-actions">
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={() => onDelete(todo._id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
