const Todo = require("../models/Todo.model");

module.exports.todosController = {
  addTodo: async (req, res) => {
    try {
      const todo = await Todo.create({
        todo: req.body.todo,
      });
      res.json(todo);
    } catch (err) {
      res.json(err.message);
    }
  },

  getTodos: async (req, res) => {
    try {
      const todos = await Todo.find();
      res.json(todos);
    } catch (err) {
      res.json(err.message);
    }
  },

  makeCompleted: async (req, res) => {
    try {
      await Todo.findByIdAndUpdate(req.params.id, {
        completed: req.body.completed,
      });
      // const todos = await Todo.find()
      res.json("todos");
    } catch (err) {
      res.json(err.message);
    }
  },

  deleteTodo: async (req, res) => {
    try {
      await Todo.findByIdAndDelete(req.params.id);
      res.json("Удалено");
    } catch (err) {
      res.json(err.message);
    }
  },
};
