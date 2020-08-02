const db = require("./main.db.js")

exports.index = (req, res) => {
  let keyword = req.query.keyword ? req.query.keyword : "";
  let barangays = req.query.barangay ? req.query.barangay : [];
  keyword = keyword.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let sql = "select * from lists";
  let keywords = keyword.split(",");
  let mappedKeywords = keywords.map(item => {
    return `full_name_ln like '%${item.trim()}%'`;
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
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":rows
      })
    });
};

exports.statistics = (req, res) => {
  let sql = "select count(*) as category_count, category from lists group by category";
  params = [];
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":rows
      })
    });
};

exports.barangayNames = (req, res) => {
  let sql = "select distinct barangay_name from lists where barangay_name is not null order by barangay_name";
  params = [];
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data": rows
      })
    });
};
