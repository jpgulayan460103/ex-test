var express = require('express');
var router = express.Router();
const controller = require("../main.c.js");

/* GET home page. */
router.get(['/','/pages/:userId?'], function(req, res, next) {
  if(!req.session.isUserLogged && req.originalUrl != "/pages/login"){
    res.redirect('/pages/login');
  }
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
  if(req.session.isUserLogged){next()}else{res.status(401).json({"error":"Unauthorized"});}
})
router.use(['/users'], function (req, res, next) {
  let method = req.method;
  switch (method) {
    case "GET":
      if(req.session.isUserLogged && req.session.userLogged.type == "admin"){next()}else{res.status(403).json({"error":"Unauthorized"});}
      break;
    case "PUT":
    case "DELETE":
      if(req.session.isUserLogged){next()}else{res.status(401).json({"error":"Unauthorized"});}
      break;
  
    default:
      next();
      break;
  }
})

module.exports = router;
