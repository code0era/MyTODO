const Todo = require('../models/Todo');

const getAllTodos  = async (req, res) =>{
    try {
        const todos  = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

const getTodoById =async (req, res)=>{
    try {
        const todo = await Todo.findById(req.params.id);
        if(!todo){
            return res.status(404).json({message: "Todo not found"});
        }
        res.status(200).json(todo);

    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

const createTodo = async (req, res)=>{
    try {
        const newTodo = new Todo({
            title : req.body.title,
            description : req.body.description
        });
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const updateTodo = async(req , res)=>{
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true , runValidators:true}
        );
        if(!updatedTodo){
            return res.status(404).json({message:'Todo not found'});
        }
        res.status(200).json(updatedTodo);

    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const deleteTodo = async(req , res)=>{
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        if(!deletedTodo){
            return res.status(404).json({message :'Todo not found'});
        }
        res.status(200).json({message:'Todo deleted successfully'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports  = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
};