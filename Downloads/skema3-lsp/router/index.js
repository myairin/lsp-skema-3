"uses strict";

const express = require("express");
const router = express.Router();
const { Controller } = require("../Controller/controller");

router.get("/users", Controller.showAllUser);
router.post("/user/create", Controller.newUser);

module.exports = { router };
