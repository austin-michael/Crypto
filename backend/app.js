const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// database connection
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then((result) => {
    console.log("Connected to DB");
    console.log("Listening for requests on http://localhost:3000/");
    app.listen(3000);
  })
  .catch((err) => console.log(err));

// routes
