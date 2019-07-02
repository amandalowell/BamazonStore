var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "rootroot",
  database: "bamazon"
});

// display  all of the items available for sale. Include the ids, names, and prices of products for sale.




//promp users with two messages :

//1. ask them the ID of the product they would like to buy 
//2. ask how many units of the product they would like to buy.



//Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

//If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.




//However, if your store does have enough of the product, you should fulfill the customer's order.
//This means updating the SQL database to reflect the remaining quantity.
//Once the update goes through, show the customer the total cost of their purchase.

var mysql = require(“mysql”);
var inquirer = require(“inquirer”);

// ------------------------------- CONNNECTION
var connection = mysql.createConnection({
   host: “localhost”,

   // Your port; if not 3306
   port: 3306,

   // Your username
   user: “root”,

   // Your password
   password: “rootroot”,
   database: “bamazon”
});

connection.connect(function (err) {
   if (err) throw err;
   runSearch();
});


// ------------------------------- USER INPUT
// function searchStore() {
//     // prompt for info about the item being put up for auction
//     inquirer
//         .prompt([
//             {
//                 name: “product_id”,
//                 type: “input”,
//                 message: “What is the ID of the product that you would like to buy?”
//             },
//             {
//                 name: “product_amount”,
//                 type: “input”,
//                 message: “How many units of that product would you like to buy?”
//             },
//             {
//                 name: “startingBid”,
//                 type: “input”,
//                 message: “How many units of that product would you like to buy?“,
//                 validate: function (value) {
//                     if (isNaN(value) === false) {
//                         return true;
//                     }
//                     return false;
//                 }
//             }
//         ])
//         .then(function (answer) {
//             // when finished prompting, insert a new item into the db with that info
//             connection.query(
//                 console.log(“done”)
//             );
//         });
// }

// searchStore()


function productAmountSearch() {
   inquirer
       .prompt({
           name: “productID”,
           type: “input”,
           message: “What is the ID of the product that you would like to buy?”
       })
       .then(function (answer) {
           var query = “SELECT item_id, stock_quantity”;
           query += “FROM products ON (products.item_id = products.artist AND top_albums.year “;
           query += “= top5000.year) WHERE (top_albums.artist = ? AND top5000.artist = ?) ORDER BY top_albums.year, top_albums.position”;

           connection.query(query, [answer.artist, answer.artist], function (err, res) {
               console.log(res.length + ” matches found!“);
               for (var i = 0; i < res.length; i++) {
                   console.log(
                       i + 1 + “.) ” +
                       “Year: ” +
                       res[i].year +
                       ” Album Position: ” +
                       res[i].position +
                       ” || Artist: ” +
                       res[i].artist +
                       ” || Song: ” +
                       res[i].song +
                       ” || Album: ” +
                       res[i].album
                   );
               }

               runSearch();
           });
       });
}

productAmountSearch()


// connection.connect(function (err) {
//     if (err) throw err;
//     console.log(“connected as id ” + connection.threadId + “\n”);
//     readColleges();
// });

// function readColleges() {
//     connection.query(“SELECT name FROM colleges”, function (err, res) {
//         if (err) throw err;

//         // Log all results of the SELECT statement
//         console.log(res);
//         connection.end();
//     });