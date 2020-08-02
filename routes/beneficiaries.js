var express = require('express');
var router = express.Router();

const controller = require("../main.c.js");

router.get("/", controller.index);
router.get("/statistics", controller.statistics);
router.get("/barangays", controller.barangayNames);

module.exports = router;