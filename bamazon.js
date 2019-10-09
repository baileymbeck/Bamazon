require("dotenv").config();
var http = require("http");
var mysql = require("mysql");
var inquirer = require("inquirer");

 

var connection = mysql.createConnection({
  host: "localhost",

  // Your username
  user: "root",

  // Your port; if not 3306
 PORT: 7500,

  // Your password
  password: process.env.BAMAZON_PWD,
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

