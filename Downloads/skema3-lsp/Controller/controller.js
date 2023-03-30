"use strict";
const { User } = require("../model/User");
class Controller {
  static async showAllUser(req, res, next) {
    const users = await User.getUser((data) => {
      try {
        res.json({
          status: 200,
          message: "User data....",
          data,
        });
      } catch (error) {
        res.status(500).json({
          message: error,
        });
      }
    });
  }

  static async newUser(req, res, next) {
    // const username = "adri";
    // const password = "123456";
    // const email = "adri@gmail.com";
    const payload = req.body;
    console.log(payload);
    try {
      const user = await User.createUser(payload);
      res.status(201).json({
        message: user,
      });
      console.log(user);
    } catch (error) {
      res.send(error);
      next();
    }
  }
}

module.exports = { Controller };
