const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

var cors = require('cors');
app.use(cors());
   
/*------------------------------------------
--------------------------------------------
parse application/json
--------------------------------------------
--------------------------------------------*/
app.use(bodyParser.json());
   
/*------------------------------------------
--------------------------------------------
Database Connection
--------------------------------------------
--------------------------------------------*/
const conn = mysql.createConnection({
  host: '127.0.0.1',
  port: '3307', /* please change the port number depending on your pc setup */
  user: 'root', /* MySQL User */
  password: '', /* MySQL Password */
  database: 'node_restapi' /* MySQL Database */
});
   
/*------------------------------------------
--------------------------------------------
Shows Mysql Connect
--------------------------------------------
--------------------------------------------*/
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected with App...');
});
   
/**
 * Get All Items
 *
 * @return response()
 */
app.get('/api/items',(req, res) => {
  let sqlQuery = "SELECT * FROM products";
  
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});
   
/**
 * Create New Item
 *
 * @return response()
 */
app.post('/api/items',(req, res) => {
  // console.log(req.body)
  req.body.data.forEach((item) => {
    // Insert item on transactions table
    let data = {transaction_id: item.product_id, user_id: 1, product_id: item.product_id, order_amount: item.unit_price };
    let sqlQuery = "INSERT INTO transactions SET ?";
    let query = conn.query(sqlQuery, data,(err, results) => {
        if(err) throw err;
    });
    // Update items on products table
    conn.query("UPDATE products SET active_status='"+0+"' WHERE product_id="+item.product_id, (err, results) => {
      if(err) throw err;
    });
  });
  res.send(apiResponse('Data saved successfully !'));
});
  
/**
 * API Response
 *
 * @return response()
 */
function apiResponse(results){
    return JSON.stringify({"status": 200, "error": null, "response": results});
}
   
/*------------------------------------------
--------------------------------------------
Server listening
--------------------------------------------
--------------------------------------------*/
app.listen(8000,() =>{
  console.log('Server started on port 8000...');
});