require('dotenv').config();

const cors = require('cors');
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/REACT_employee", { useNewUrlParser: true });
app.use(router);

app.listen(PORT, function () {
  console.log(`API server now on port ${PORT}!`);
});