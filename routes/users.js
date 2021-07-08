var express = require('express');
var router = express.Router();

const controller = require("../main.c.js");

router.get("/", controller.users);
router.get("/login", controller.login);

module.exports = router;
