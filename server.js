require("dotenv").config();
//server.js
const express = require("express");
//const favicon = require('express-favicon');
const port = process.env.PORT || 7777;
const app = express();

app.get("/", function (req, res) {
  return res.send("hello brotha!");
});

app.post("*", function (req, res, next) {
	console.log("post", req)
	next()
});

app.get("*", function (req, res, next) {
	console.log("get", req)
	next()
});

app.post("/:hash/verify", function (req, res) {
	console.log("/:hash/v", req)
	res.json( {"x-access-key": ""})
});

app.post("/:hash", function (req, res) {
	console.log("/:hash")
  return res.send("hello brotha!");
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return err;
  }
  console.log(`Listening at ${port}`);
});
