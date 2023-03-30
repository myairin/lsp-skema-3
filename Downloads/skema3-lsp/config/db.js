"use strict";
require("dotenv").config();
module.exports = {
  HOST: process.env.DB_HOST,
  USERNAME: process.env.DB_USERNAME,
  DB_NAME: process.env.DB_NAME,
};
