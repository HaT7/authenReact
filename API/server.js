const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 4000;
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./DB.js");
const personRoute = require("./Routes/person.route");

// config db
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log("Database connected successfully");
  },
  (err) => {
    console.log("Error connecting to database" + err);
  }
);

// middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/persons", personRoute);

app.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});
