const mongoose = require("mongoose");

const todosSchema = mongoose.Schema({
  todo: {
    required: true,
    type: String,
  },

  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("Todo", todosSchema);

module.exports = Todo;
