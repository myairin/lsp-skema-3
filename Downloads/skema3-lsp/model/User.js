"use strict";

const { dbConfig, connectQuery } = require("../config/db.config");
const bcrypt = require("bcrypt");
const saltRounds = 10;

class User {
  constructor(user_id, username, password, email) {
    this.user_id = user_id;
    this.username = username;
    this.password = password;
    this.email = email;
  }

  static async getUser(result) {
    let textQuery = "SELECT * FROM customer";

    try {
      const allUser = await connectQuery(textQuery);
      result(allUser);
      console.log("Hasil data user", allUser);
      return allUser;
    } catch (error) {
      return "Error: ", error;
    }
  }

  static async createUser(username, password, email) {
    const textQuery = "INSERT INTO customer (username, password, email) VALUES(?, ?, ?)";
    // console.log(textQuery);
    try {
      const createUser = await connectQuery(textQuery, [username, password, email]);
      console.log(createUser);
      if (createUser) {
        return "User Created";
      }
    } catch (error) {
      return error;
    }
  }
}
module.exports = { User };
