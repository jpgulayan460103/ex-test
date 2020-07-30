var express = require('express');
var router = express.Router();

const tutorials = require("../controllers/tutorial.controller.js");

/* GET users listing. */
router.get("/", tutorials.create);
router.get("/all", tutorials.findAll);

module.exports = router;
