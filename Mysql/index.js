const express = require('express');
const con = require('./config');
const app = express();
app.use(express.json());// use when req or take data

app.get('/',(req,res)=>{
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM student", function (err, result, fields) {
          if (err) throw err;
          res.send(result);
        });
      });
});

app.post('/',(req,resp)=>{
 const data = { name: 'aaa bhatt',class: '+2',math: '70%',english: '90%'};// req.body
 con.query('INSERT INTO student SET ?', data, function (error, results, fields) {
    if (error) throw error;
    //console.log(results.insertId);
    resp.sendStatus(201); // 201 Created
  });
});


app.put('/:id',(req,resp)=>{
    const data = [req.body.name,req.body.class,req.body.math,req.body.english,req.params.id];
    //const data = ['saurav', 'bca', '40%','50%',2];
    var query = con.query('UPDATE student SET name = ?, class = ?, math = ? ,english = ? where id = ?', data, function (error, results, fields) {
        if (error) throw error;
        resp.send(results.affectedRows + " record(s) updated");
     });
   });
   

   app.delete('/:id',(req,resp)=>{
   // var query = con.query("DELETE FROM student WHERE id = " + req.params.id, function (error, results, fields) {

    var query = con.query("DELETE FROM student WHERE id = " + req.params.id, function (error, results, fields) {
    if (error) throw error;
       //console.log(results.insertId);
       resp.send("Number of records deleted: " + results.affectedRows);
     });
    });

app.listen(5000);