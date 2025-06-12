require("dotenv").config();
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(300, () => console.log("Server started on port 3000"));
