require("dotenv").config();
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
    displayItems();
  });

  
function displayItems(){
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log(res);
        purchase();
      });
}


function getItem(item_id, desired_quantity){
    connection.query("SELECT * FROM products WHERE item_id = ?", [item_id], function(err, res) {
        if(res.length === 0){
            console.log("This number does not match our products");
            purchase();
        }else{
            // get the item id and stock quantity from the res
            check(item_id, res[0].price, res[0].stock_quantity, desired_quantity);
        }
    });
}


function purchase() {
    inquirer
      .prompt([{
        name: "purchase",
        type: "prompt",
        message: "Please enter the item_id for the product you would like to purchase.",
      },
      {
          name:"quantity",
          type: "prompt",
          message: "Please enter your desired quantity."
      }
    ])
      .then(function(answer){
            // get item
            getItem(answer.purchase, answer.quantity);
      });
  }

function check(item_id, price, stock_quantity, desired_quantity){

        if(stock_quantity >= desired_quantity){
            console.log(stock_quantity + " units are in stock.");
            updateData(item_id, price, stock_quantity, desired_quantity);
        }
        else if(stock_quantity < desired_quantity){
            console.log(stock_quantity + " exceeds our stock quantity. Try again with a smaller request.")
            
        }
    

}
 function updateData(item_id, price, stock_quantity, desired_quantity){
  //  here is where to touch database to update stock_quantity
    if(stock_quantity >= desired_quantity){
        console.log(+stock_quantity - +desired_quantity); 
        cost(item_id, price, stock_quantity, desired_quantity);
    } 
    else if(stock_quantity <= desired_quantity){
      console.log("Insufficient quantity!"); 
    }
}

function cost(item_id, price, stock_quantity, desired_quantity){
  // console.log(price);
  console.log(+desired_quantity * +price); 
  
}