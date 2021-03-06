const db = require("./main.db.js")

exports.index = (req, res) => {
  let keyword = req.query.keyword ? req.query.keyword : "";
  let barangays = req.query.barangay ? req.query.barangay : [];
  let searchType = req.query.searchType ? req.query.searchType : "full_name_ln";
  let source = req.query.source ? req.query.source : "";
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
  if(source != ""){
    sql += ` and source = '${source}'`;
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

exports.CategoryStatistics = (req, res) => {
  let sql = "select count(*) as category_count, category, source from lists group by category, source";
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

exports.SourceStatistics = (req, res) => {
  let sql = "select count(*) as source_count, source from lists group by source";
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

exports.provinceNames = (req, res) => {
  let sql = "select distinct province_name from lists where province_name is not null order by province_name";
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
        res.status(400).json({"error":err.message});
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
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data": rows
      })
    });
};
