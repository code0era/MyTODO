const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require ('dotenv').config();
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = process.env.PORT||5000;


// Middleware
app.use(cors());
app.use(express.json());


//Routes
app.use('/api/todos',todoRoutes);

//database
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('MongoDB connected successfully'))
.catch((err)=>console.log('MongoDB connection error', err));

// test route
app.get('/' ,(req,res)=>{
    res.send('TODO Backend is running!');
});
//start server
app.listen(PORT ,()=>{
    console.log(`Server is Running at PORT ${PORT}`);
});
