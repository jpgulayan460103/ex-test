var sqlite3 = require('sqlite3').verbose()
var bcrypt = require('bcrypt');

const SALTROUNDS = 10;
const DBSOURCESAP = "dswd_sap.db"
const DBSOURCEUSERS = "dswd_users.db"
const sqlQuery = (dta,sql,params) => {
  return new Promise((resolve, reject) => {
    dta.all(sql, params, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(rows);
    });
  });
}

let db = new sqlite3.Database(DBSOURCESAP, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite sap database.')
    }
});

let usersdb = new sqlite3.Database(DBSOURCEUSERS, async (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite users database.')
        let sql = "select count(*) as users_count from users";
        params = [];
        let usersCount = await sqlQuery(usersdb, sql, params);
        if(usersCount[0].users_count == 0){
          bcrypt.hash('admin', SALTROUNDS, async function (err,   hash) {
            sql = `insert into users (username,password,type,is_active) values ('admin','${hash}','admin',1)`;
            usersCount = await sqlQuery(usersdb, sql, params);
          });
          
        }
    }
});


module.exports = {db,usersdb, sqlQuery}
