"use strict";
require("dotenv").config();

const dbConfig = require("./db");
const mysql = require("mysql2");

const dbConnect = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USERNAME,
  database: dbConfig.DB_NAME,
});

dbConnect.connect((err) => {
  if (err) throw err;
  console.log("Connecting to database");
});

const connectQuery = (sql, params) => {
  return new Promise((resolve, reject) => {
    dbConnect.query(sql, params, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = { dbConnect, connectQuery };
