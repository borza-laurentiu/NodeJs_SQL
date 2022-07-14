const express = require('express');   //node express driver
const mysql = require('mysql');       // mysql driver

const app = express();                //create a local node express app

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    pass: '',
    database: 'acme'
})
 
db.connect(function(err) {         //can also simply use db.connect(); instead of the db.connect with params
    if (err) throw err;
    console.log("Connected!");
  });

app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    const sql1 = 'SELECT first_name, last_name, email FROM users ORDER BY last_name';

    // db.query(sql, (err, result) => {
    //     if (err) throw err;       //if there is an error, throw that error
    //     res.send(result);
    // });

    db.query(sql1, (err, result) => {
      if (err) throw err;       //if there is an error, throw that error.
      res.send(result);
  });
});




app.listen(5050, () => console.log('Server started'));




