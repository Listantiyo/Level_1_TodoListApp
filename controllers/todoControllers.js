const TodoModel = require('../models/todoModel');
const {v4: uuidv4} = require('uuid');

const getAllTodos =  async (req, res) => {
    try {
        const result =  await TodoModel.find().exec();
        if (!result) {
            console.info('No todos found');
            return res.status(404).json({message: 'No todos found'});
        }else{
            console.info(result);
            return res.status(200).json(result);
        }

    }catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
}

const getTodoById = async (req, res) => {
    try {
        const {id} = req.params;
        const result =  await TodoModel.findById({_id:id}).exec();
        if (!result) {
            console.info(`No todo found with _id:${id}`);
            return res.status(404).json({message: `No todo found with _id:${id}`});
        }else{
            console.info(result);
            return res.status(200).json(result);
        }
    }catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
}

const createTodo = async (req, res) => {
    try {
        const {title, category, description} = req.body;
        const todo = new TodoModel({
            uuid: uuidv4(),
            title,
            category,
            description
        });
        const result = await todo.save();
        if (!result) {
            console.info('Failed to create todo');
            return res.status(500).json({message: 'Failed to create todo'});
        }else{
            console.info(result);
            return res.status(201).json(result);
        }
    }catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
}

const updateTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const {title, category, description} =  req.body;
        const result = await TodoModel.findOneAndUpdate(
            {_id: id},
            {title, category, description},
            {upsert: true, new: true}
        ).exec();
        if (!result) {
            console.info('Failed to update todo');
            return res.status(500).json({message: `Failed to update todo with _id:${id}`});
        }else{
            console.info(result);
            return res.status(200).json(result);
        }
    }catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

const deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await TodoModel.findOneAndDelete({_id:id}).exec();
        if (!result) {
            console.info('Failed to delete todo');
            return res.status(500).json({message: `Failed to delete todo with _id:${id}`});
        }else{
            console.info(result);
            return res.status(200).json(result);
        }

    }catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
}