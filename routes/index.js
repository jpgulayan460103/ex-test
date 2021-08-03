var express = require('express');
var router = express.Router();
const controller = require("../main.c.js");

/* GET home page. */
router.get(['/'], function(req, res, next) {
  if(!req.session.isUserLogged){
    // res.redirect('/login');
  }
  res.render('index');
});

router.get(['/login'], function(req, res, next) {
  res.render('index');
});

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.redirect('/login');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});
router.post("/login", controller.login);

router.use(['/beneficiaries','/users'], function (req, res, next) {
  if(req.session.isUserLogged){
    next()
  }else{
    let reqType = req.accepts(['html', 'json']);
    next()
    // if(reqType == "json"){
    //   res.status(401).json({"error":"Unauthorized"});
    // }else{
    //   res.redirect('/login');
    // }
  }
})

module.exports = router;
