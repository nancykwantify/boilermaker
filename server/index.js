const express = require("express"); //create an App
const app = express();
const path = require("path");
const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!

// logging middleware
const morgan = require("morgan");
app.use(morgan("dev"));

// static middleware
app.use(express.static(path.join(__dirname, "./path/to/static/assets")));

// parsing middleware
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", require("./apiRoutes")); // matches all requests to /api

app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});

// for any requests that don't match one of our API routes
app.get("*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "/Users/nancykwan/Desktop/boilermaker/index.html")
  );
});

// handle 500 errors
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

module.exports = app;
