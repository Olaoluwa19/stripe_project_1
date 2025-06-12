require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

// built-in middleware to handle url encoded data i.e form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// serve static files
app.use("/", express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ROUTE
app.use("/", require("./routes/api"));

app.listen(3000, () => console.log("Server started on port 3000"));
