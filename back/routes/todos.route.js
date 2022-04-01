const { Router } = require("express");
const { todosController } = require("../controllers/todos.controller");

const router = Router();

router.get("/todos", todosController.getTodos);
router.patch("/todos/:id", todosController.makeCompleted);
router.post("/todos", todosController.addTodo);
router.delete("/todos/:id", todosController.deleteTodo);

module.exports = router;
