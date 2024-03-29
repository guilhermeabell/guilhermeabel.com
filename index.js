const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

/* this dotenv for development enviroument, set your db URI
 * in .env file and remove commented code line underneath 
*/
// require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

// connect to DB and listen

mongoose.connect(
  process.env.DATABASE_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;

    app.listen(PORT, () => {
      console.log(`app listening in PORT :${PORT}`);
    });
  }
);

// routes

app.use("/categories", require("./routes/categories"));
app.use("/contacts", require("./routes/contacts"));
app.use("/subscribers", require("./routes/subscribers"));
app.use("/products", require("./routes/products"));

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-type", "text/plain");

  res.send("welcome to guilhermeabel.tk backend API");
});

app.use("/*", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-type", "application/json");

  res
    .status(404)
    .json({ status: 404, message: "Route Not Found, please try again" });
});
