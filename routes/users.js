var express = require('express');
var router = express.Router();

const controller = require("../main.c.js");

router.get("/", controller.users);
router.post("/", controller.userAdd);
router.put("/:userId", controller.userUpdate);
router.delete("/:userId", controller.userDelete);


module.exports = router;
