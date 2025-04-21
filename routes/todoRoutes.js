const express = require("express");
const app = express();
const BodyParser = require('body-parser');
const port = 8080;

const todoController = require('../controllers/todoControllers');

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extends:true}));

//Routes Todo
app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.get('/api/todos', todoController.getAllTodos);
app.get('/api/todos/:id', todoController.getTodoById);
app.post('/api/todos', todoController.createTodo);
app.put('/api/todos/:id', todoController.updateTodo);
app.delete('/api/todos/:id', todoController.deleteTodo);

app.listen(port, () => {
    console.info(`Server is running on port ${port}`);
})