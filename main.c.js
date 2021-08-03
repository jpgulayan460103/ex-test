const bcrypt = require('bcrypt');
const {db, usersdb, sqlQuery} = require("./main.db.js")
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
      res.status(422).json({"message":'Username not found'});
    }
  }else{
    res.status(422).json({"message":'Invalid credentials'});
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

exports.userAdd = async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let type = 'user';
  let first_name = req.body.first_name;
  let middle_name = req.body.middle_name;
  let last_name = req.body.last_name;
  let department_unit = req.body.department_unit;

  let users = await sqlQuery(usersdb,"select * from users where username = ?",[username]);
  if(users.length == 0){
    let hash = await bcrypt.hash(password, SALTROUNDS);
    let insertSql = `insert into users (username,password,type,is_active,first_name,middle_name,last_name,department_unit) values (?,?,?,0,?,?,?,?)`;
    let params = [username, hash, type, first_name, middle_name, last_name, department_unit];
    await sqlQuery(usersdb,insertSql,params);
    res.json({
      "message":"success",
      "data": users
    })
  }else{
    res.status(422).json({"message":"Username is already added"});
  }
}


exports.userUpdate = async (req, res) => {
  let userId = req.params.userId;
  let username = req.body.username;
  let password = req.body.password;
  let type = req.body.type;
  let isActive = req.body.is_active;

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
  params.push(userId);
  sql = `${sql} where id = ?`;
  await sqlQuery(usersdb,sql,params);
  res.json({
    "message":"success",
    "data": user,
    "sql" : sql
  })
}

exports.userDelete = async (req, res) => {
  let userId = req.params.userId;
  let userLogged = req.session.userLogged;
  if(userLogged && userLogged.type == "admin"){
    await sqlQuery(usersdb,"delete from users where id = ?",userId);
    res.json({
      "message":"success",
    })
  }else{
    res.status(403).json({"message":"Unauthorized"});
  }
}
