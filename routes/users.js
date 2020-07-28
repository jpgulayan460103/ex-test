var express = require('express');
var router = express.Router();

const tutorials = require("../controllers/tutorial.controller.js");

/* GET users listing. */
router.get("/", tutorials.create);

module.exports = router;
