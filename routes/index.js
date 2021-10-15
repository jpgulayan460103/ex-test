var express = require('express');
var router = express.Router();
const controller = require("../main.c.js");

/* GET home page. */
router.get(['/','/pages/:userId?'], function(req, res, next) {
  // controller.authenticateToken(req, res, next);

  res.render('index');
});

router.get(['/pages/login'], function(req, res, next) {
  res.render('index');
});

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.redirect('/pages/login');
});

router.post("/login", controller.login);

router.get('/logged', controller.logged);

router.use(['/beneficiaries'], function (req, res, next) {
  controller.authenticateToken(req, res, next);
})
router.use(['/users'], function (req, res, next) {
  let method = req.method;
  switch (method) {
    case "GET":
      controller.authenticateToken(req, res, next);
      break;
    case "PUT":
    case "DELETE":
      controller.authenticateToken(req, res, next);
      break;
  
    default:
      next();
      break;
  }
})



module.exports = router;
