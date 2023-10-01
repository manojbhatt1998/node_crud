const dbconnect = require('./mongodb');
const express = require('express');
const mongodb = require('mongodb');
const app = express();


 app.use(express.json());// use when req or take data

app.get('/', async (req, res) => { 
        const data = await dbconnect(); 
        //const collection = data.collection('test');  
        let result = await data.find().toArray();
        res.send(result);
});

app.post('/', async (req, res) => { 
    const data = await dbconnect(); 
    console.log(req.body);
     //const collection = data.collection('test');  
     let result = await data.insertOne(req.body);
     res.send(req.body);
});

app.put('/:name',async (req,res)=>{
   const data = await dbconnect();  
   const result = await data.updateOne(
    {name:req.params.name},
    {$set:req.body} 
   );
   //console.log(req.body); 
   res.send(req.body);
});

app.delete('/:id',async (req,res)=>{
   const data = await dbconnect();   
   console.log(req.params.id);
   //{_id:new mongodb.ObjectId(req.params.id)}
   const result = data.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
   console.log({_id:new mongodb.ObjectId(req.params.id)});
   if (result.deletedCount = 1) {
    res.send('Document deleted successfully');
  } else {
    res.send('Document not found or deletion failed.');
  }
   
});


app.listen(3000, ()=>{
  console.log("Server listening on Port 3000");
})
