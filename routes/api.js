const express = require("express");
const api = express.Router();

api.use("/", require("./root"));
api.use("/checkout", require("./checkout"));
api.use("/complete", require("./complete"));
api.use("/cancel", require("./cancel"));

module.exports = api;
