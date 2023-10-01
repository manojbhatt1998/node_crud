const express = require('express');
require('../crud_mongose/config');
const Productmodal = require('./productschema');

const app = express();
app.use(express.json());

//insert data by postman
app.post("/create", async (req, res) => {
    let data = new Productmodal(req.body);
    let result = await data.save();
    //console.log(result);
    res.send(result);

});

//update data by postman
// app.post("/update", async (req, res) => {
//     const myquery = await { name: "12 pro plus" };
//     const newvalues = await { $set:req.body };
//     const result = await Productmodal.updateOne( myquery,newvalues);
//     res.send(result);
// });

//update data by id postman
app.post("/update/:_id", async (req, res) => {
    const result = await Productmodal.updateOne(
       req.params,
      {
        $set:req.body 
      }
        
    );
    res.send(result);
});


//Read data by postman
// app.post("/read", async (req, res) => {
//     const result = await Productmodal.find();
//     res.send(result);
// });

//Read data by postman
app.post("/read/:key", async (req, res) => {
    // console.log(req.params.key);
    const result = await Productmodal.find({
        $or: [
            { "name": { $regex: req.params.key }},{ "brand": { $regex: req.params.key }}
        ]
    });
    res.send(result);
});


//delete data by postman
app.post("/delete/:_id", async (req, res) => {
      const data = await req.params;
     //console.log(data);
     const result = await Productmodal.deleteOne(data);
     res.send(result);
});



app.listen(5000 ,()=>{
    console.log("Port running");
});