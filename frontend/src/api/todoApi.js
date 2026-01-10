import axios from 'axios';

const API_URL = "http://localhost:5000/api/todos";

// get all todo
export const getAllTodos  = async ()=>{
    const response  =await axios.get(API_URL);
    return response.data;
}
// get todo by id
export const getTodoById  = async (id)=>{
    const response  =await axios.get(`${API_URL}/${id}`);
    return response.data;
}
//  create a todo
export const createTodo  = async (todoData)=>{
    const response = await axios.post(API_URL,todoData);
    return response.data;
}
// update todo 
export const updateTodo  = async ( id, todoData)=>{
    const response = await axios.put(`${API_URL}/${id}`,todoData);
    return response.data;
}
// Delete todo
export const deleteTodo  = async ( id)=>{
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
}

