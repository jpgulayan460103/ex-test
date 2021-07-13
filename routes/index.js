var express = require('express');
var router = express.Router();
const controller = require("../main.c.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.session.isUserLogged){
    // res.redirect('/logged-status');
  }
  res.render('error', { data: "asdasdas" });
});

router.get('/login-status', function(req, res, next) {
  if(req.session.isUserLogged){
    res.send("Logged");
  }else{
    res.send("Not Logged");
  }
});

router.get('/login', function(req, res, next) {
  res.render('login');
});
router.post("/login", controller.login);

router.use(['/beneficiaries','/users'], function (req, res, next) {
  // console.log(req.originalUrl);
  if(req.session.isUserLogged){
    next()
  }else{
    res.status(401).json({"error":"Unauthorized"});
  }
})

module.exports = router;
