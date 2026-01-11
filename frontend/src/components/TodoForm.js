import React, { useState } from "react";

function TodoForm({ onTodoAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Title is required!");
      return;
    }

    await onTodoAdded({title, description});
    
    setTitle('');
    setDescription('');
  };

  return (
    <div className="todo-form">
      <h2>Add new todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Todo title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Todo description...{optional}"
          value={description}
          onChange={(e) => setTitle(e.target.value)}
          rows={3}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoForm;
