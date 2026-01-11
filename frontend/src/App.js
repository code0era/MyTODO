import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { getAllTodos, createTodo, updateTodo, deleteTodo } from "./api/todoApi";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await getAllTodos();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch todos. Is backend running?");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (todoData) => {
    try {
      const newTodo = await createTodo(todoData);
      setTodos([...todos, newTodo]);
    } catch (err) {
      alert("Failed to add todo");
      console.error(err);
    }
  };

  const handleUpdateTodo = async (id, todoData) => {
    try {
      const updatedTodo = await updateTodo(id, todoData);
      setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)));
    } catch (err) {
      alert("Failed to update todo");
      console.error(err);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (err) {
      alert("Failed to delete todo");
      console.error(err);
    }
  };

  if (loading) return <div className="loading">Loading todos...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="App">
      <header>
        <h1> MERN Todo App</h1>
      </header>
      <div className="container">
        <TodoForm onTodoAdded={handleAddTodo} />
        <TodoList
          todos={todos}
          onUpdate={handleUpdateTodo}
          onDelete={handleDeleteTodo}
        />
      </div>
      <footer className="footer">
        <p>
          © 2026 • Made with ❤️ by <span className="brand">Code0era</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
