const express = require("express");
const { getTodos, addTodos, updateTodos, deleteTodos } = require("../controllers/todoControllers");

const router = express.Router();

router.route("/todos").get(getTodos);
router.route("/todos/new").post(addTodos)
router.route("/todos/:id").put(updateTodos)
router.route("/todos/:id").delete(deleteTodos)

module.exports = router;