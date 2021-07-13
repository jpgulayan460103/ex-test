var express = require('express');
var router = express.Router();

const controller = require("../main.c.js");

router.get("/", controller.users);
router.post("/", controller.usersAdd);
router.put("/:userId", controller.usersUpdate);


module.exports = router;
