const express = require("express");
const api = express.Router();

api.use("/", require("./root"));
api.use("/checkout", require("./checkout"));

module.exports = api;
