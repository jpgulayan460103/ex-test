const isEmpty = require('lodash/isEmpty');
const bcrypt = require('bcrypt');
const {db, usersdb, sqlQuery} = require("./main.db.js");
const { update } = require('lodash');
const SALTROUNDS = 10;

const logUserAccess = (user, userAgent) => {
  let d = new Date();
  let date = d.toLocaleDateString();
  let time = d.toLocaleTimeString();
  let sql = "insert into login_logs (user_id, date, user_agent) values (?,?,?)";
  let params = [user.id, `${date} ${time}`, JSON.stringify(userAgent)];
  sqlQuery(usersdb, sql, params);
}
exports.index = (req, res) => {
  let keyword = req.query.keyword ? req.query.keyword : "";
  let userLogged = req.session.userLogged;
  let barangays = req.query.barangay ? req.query.barangay : [];
  let searchType = req.query.searchType ? req.query.searchType : "full_name_ln";
  keyword = keyword.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let sql = "select * from lists";
  let keywords = keyword.split(",");
  let mappedKeywords = keywords.map(item => {
    return `(full_name_ln like '%${item.trim()}%' or cash_out_ref_number like '%${item.trim()}%')`;
  });
  let keywordQuery = mappedKeywords.join(" and ");
  sql += ` where ${keywordQuery}`;
  if (Array.isArray(barangays) && barangays.length != 0){
    let mappedBarangays = barangays.map(item => {
      return `barangay_name like '%${item.trim()}%'`;
    });
    let barangayQuery = mappedBarangays.join(" or ");
    sql += ` and (${barangayQuery})`;
  }
  sql += " order by full_name_ln asc limit 500";
  // console.log(sql);
  params = [];
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"message":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":rows
      })
    });
};

exports.CategoryStatistics = (req, res) => {
  let sql = "select count(*) as category_count, category, source from lists group by category, source";
  params = [];
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"message":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":rows
      })
    });
};

exports.SourceStatistics = (req, res) => {
  let sql = "select count(*) as source_count, source from lists group by source";
  params = [];
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"message":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":rows
      })
    });
};

exports.provinceNames = (req, res) => {
  let sql = "select distinct province_name from lists where province_name is not null order by province_name";
  params = [];
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"message":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data": rows
      })
    });
};


exports.cityNames = (req, res) => {
  params = [];
  let province_name = req.query.province_name ? req.query.province_name : "";
  let provinceQuery = "";
  if(province_name != ""){
    provinceQuery = " AND province_name = ?";
    params.push([province_name]);
  }
  let sql = `select distinct city_name, province_name from lists where city_name is not null ${provinceQuery} order by city_name`;
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"message":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data": rows
      })
    });
};

exports.barangayNames = (req, res) => {
  params = [];
  let province_name = req.query.province_name ? req.query.province_name : "";
  let provinceQuery = "";
  if(province_name != ""){
    provinceQuery = " AND province_name = ?";
    params.push([province_name]);
  }

  let city_name = req.query.city_name ? req.query.city_name : "";
  let cityQuery = "";
  if(city_name != ""){
    cityQuery = " AND city_name = ?";
    params.push([city_name]);
  }
  
  let sql = `select distinct barangay_name, city_name, province_name from lists where barangay_name is not null ${provinceQuery} ${cityQuery} order by barangay_name`;
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"message":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data": rows
      })
    });
};

exports.login = async (req, res) => {
  let sql = "select * from users where username = ?";
  let password = req.body.password;
  let username = req.body.username;
  let params = [username];
  
  let users = await sqlQuery(usersdb, sql, params);
  if(users.length != 0){
    if(users[0].is_active == 0){
      res.status(422).json({"message":'Username not activated.'});
    }
    let result = await bcrypt.compare(password,users[0].password);

    if (result == true) {
      req.session.isUserLogged = true;
      delete users[0].password;
      req.session.userLogged = users[0];
      logUserAccess(users[0], req.useragent);
      res.status(200).json({"message":"success"});
    } else {
      res.status(422).json({"message":'Invalid credentials'});
    }
  }else{
    res.status(422).json({"message":'Username not found'});
  }
  
}


exports.users = async (req, res) => {
  let sql = "select id, username, type, is_active, first_name, middle_name, last_name, department_unit from users order by last_name, first_name";
  let params = [];
  let users = await sqlQuery(usersdb,sql,params);
  res.json({
    "message":"success",
    "data": users
  })
}

exports.usersLog = async (req, res) => {
  let userId = req.params.userId;
  let sql = "select * from login_logs where user_id = ? order by id desc";
  let params = [userId];
  let logs = await sqlQuery(usersdb,sql,params);
  res.json({
    "message":"success",
    "data": logs
  })
}

const userAddValidation = async (req, userId = null) => {
  let errors = {};
  let hasErrors = false;
  let username = req.body.username;
  let password = req.body.password;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let department_unit = req.body.department_unit;

  //confirm password
  let password_confirmation = req.body.password_confirmation;
  if(password && password_confirmation &&  password.trim() != password_confirmation.trim()){
    errors.password = ["Password do not match"];
  }

  //password length
  if(password && password.trim() != "" && password.length < 6){
    errors.password = ["Password must be atleast 6 characters"];
  }

  //password strength
  var myRe = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?& ])[A-Za-z\d@$!%*#?&]{0,}$/gm;
  var myArray = myRe.exec(password);
  if(password && password.trim() != "" && myArray == null){
    errors.password = ["Password must contain at least one letter, one number and one special character"];
  }
  
  let users;
  if(userId == null){
    users = await sqlQuery(usersdb,"select * from users where username = ?",[username]);
  }else{
    users = await sqlQuery(usersdb,"select * from users where username = ? and id is not ?",[username, userId]);
  }
  //user exist
  if(users.length != 0){
    errors.username = ["Username already exist"];
  }


  if(first_name && first_name.trim() == ""){
    errors.first_name = ["Required"];
  }
  if(last_name && last_name.trim() == ""){
    errors.last_name = ["Required"];
  }
  if(department_unit && department_unit.trim() == ""){
    errors.department_unit = ["Required"];
  }
  hasErrors = !isEmpty(errors);
  return {
    hasErrors,
    errors
  };
}

exports.userAdd = async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let password_confirmation = req.body.password_confirmation;
  let type = 'user';
  let first_name = req.body.first_name;
  let middle_name = req.body.middle_name;
  let last_name = req.body.last_name;
  let department_unit = req.body.department_unit;

  let validationResults = await userAddValidation(req);
  if(validationResults.hasErrors){
    res.status(422).json({errors: validationResults.errors});
    return false;
  }


  let hash = await bcrypt.hash(password, SALTROUNDS);
  let insertSql = `insert into users (username,password,type,is_active,first_name,middle_name,last_name,department_unit) values (?,?,?,0,?,?,?,?)`;
  let params = [username, hash, type, first_name, middle_name, last_name, department_unit];
  await sqlQuery(usersdb,insertSql,params);
  res.json({
    "message":"success",
  })
}


exports.userUpdate = async (req, res) => {
  let userId = req.params.userId;
  let username = req.body.username;
  let password = req.body.password;
  let department_unit = req.body.department_unit;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let middle_name = req.body.middle_name;
  let type = req.body.type;
  let isActive = req.body.is_active;


  let validationResults = await userAddValidation(req, userId);
  if(validationResults.hasErrors){
    res.status(422).json({errors: validationResults.errors});
    return false;
  }

  let users = await sqlQuery(usersdb,"select * from users where id = ?",userId);
  if(users.length == 0){
    res.status(404).json({"message":"No user found"});
    return false;
  }
  let user = users[0];
  delete user.password;
  
  let sql = `update users set`;
  let params = [username];
  sql = `${sql} username = ?`
  if(password && password.trim() != ""){
    let hash = await bcrypt.hash(password, SALTROUNDS);
    sql = `${sql}, password = ?`
    params.push(hash);
  }
  if(type && type.trim() != ""){
    sql = `${sql}, type = ?`
    params.push(type);
  }
  if(isActive && isActive.trim() != ""){
    sql = `${sql}, is_active = ?`
    params.push(isActive == "yes" ? 1 : 0);
  }
  if(department_unit && department_unit.trim() != ""){
    sql = `${sql}, department_unit = ?`
    params.push(department_unit);
  }
  if(first_name && first_name.trim() != ""){
    sql = `${sql}, first_name = ?`
    params.push(first_name);
  }
  if(last_name && last_name.trim() != ""){
    sql = `${sql}, last_name = ?`
    params.push(last_name);
  }
  if(middle_name && middle_name.trim() != ""){
    sql = `${sql}, middle_name = ?`
    params.push(middle_name);
  }
  params.push(userId);
  sql = `${sql} where id = ?`;
  await sqlQuery(usersdb,sql,params);
  res.json({
    "message":"success",
    "data": user,
    "sql" : sql,
    params
  })
}

exports.userDelete = async (req, res) => {
  let userId = req.params.userId;
  let userLogged = req.session.userLogged;

  await sqlQuery(usersdb,"delete from users where id = ?",userId);
  // res.json({
  //   "message":"success",
  // })
  // return false;
  if(userLogged && userLogged.type == "admin"){
    await sqlQuery(usersdb,"delete from users where id = ?",userId);
    res.json({
      "message":"success",
    })
  }else{
    res.status(403).json({"message":"Unauthorized"});
  }
}

exports.logged = async (req, res) => {
  let userLogged = req.session.userLogged;
  // console.log(userLogged == false);
  // if(typeof userLogged == "undefined"){
  //   userLogged = await sqlQuery(usersdb,"select * from users where username = ?",['jpgulayan']);
  //   userLogged = userLogged[0];
  //   delete userLogged.password;
  // }
  res.json({
    "message":"success",
    "data":userLogged
  })
}
