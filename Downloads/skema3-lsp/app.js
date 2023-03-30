"use strict";

require("dotenv").config();

const express = require("express");
const app = express();
const { router } = require("./router/index");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3110;
const originOptionsCors = {
  host: `http://localhost:${port}`,
};

app.use(router);
app.use(cors(originOptionsCors));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => console.log("listening on port", port));
