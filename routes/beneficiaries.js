var express = require('express');
var router = express.Router();

const controller = require("../main.c.js");

router.get("/", controller.index);
router.get("/statistics/category", controller.CategoryStatistics);
router.get("/statistics/source", controller.SourceStatistics);
router.get("/barangays", controller.barangayNames);

module.exports = router;
