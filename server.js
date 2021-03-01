require("dotenv").config();
//server.js
const express = require("express");
const bodyParser = require("body-parser");
//const favicon = require('express-favicon');
const port = process.env.PORT || 7777;
const app = express();


/*
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
*/

// parse application/json
app.use(bodyParser.json())

app.get("/", function (req, res) {
  return res.send("hello brotha!");
});

app.post("*", function (req, res, next) {
	console.log("post", {
		baseUrl: req.baseUrl,
		originalUrl: req.originalUrl,
		body: req.body,
		hostname: req.hostname,
		headers: req.headers,
		rewHeaders: req.rawHeaders,
		ip: req.ip,
		ips: req.ips,
		method: req.method,
		params: req.params,
		path: req.path,
		query: req.query,
		route: req.route,
	} )
	next()
});

app.get("*", function (req, res, next) {
	console.log("get", {
		baseUrl: req.baseUrl,
		originalUrl: req.originalUrl,
		body: req.body,
		hostname: req.hostname,
		headers: req.headers,
		rewHeaders: req.rawHeaders,
		ip: req.ip,
		ips: req.ips,
		method: req.method,
		params: req.params,
		path: req.path,
		query: req.query,
		route: req.route,
	} )
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
