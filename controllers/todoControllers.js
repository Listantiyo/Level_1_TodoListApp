const TodoModel = require('../models/todoModel');
const {v4: uuidv4} = require('uuid');

const getAllTodos =  async (req, res) => {
    try {

    }catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

const createTodo = async (req, res) => {
    try {

    }catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

const updateTodo = async (req, res) => {
    try {

    }catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

const deleteTodo = async (req, res) => {
    try {

    }catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

module.exports = {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo
}