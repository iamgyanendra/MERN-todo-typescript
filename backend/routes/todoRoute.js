const express = require("express");
const { getTodos } = require("../controllers/todoControllers");

const router = express.Router();

router.route("/todos").get(getTodos);

module.exports = router;