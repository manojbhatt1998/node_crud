//npm init - to start new package  
//install npm i jsonwebtoken

const express = require('express');
const jwt = require("jsonwebtoken");
const app = express();
const secretkey = "secretkey2";

app.get('/login',(req,res)=>{
     const user = {
        id:1,
        username:'manoj',
        email:"bhatt@gmail.com"
     }

jwt.sign({user},secretkey,{expiresIn:'300s'} , (err,token) =>{
    res.json({
        token
    });
  });
});

app.post("/profile",verifytoken,(req,res)=>{
  jwt.verify(req.token,secretkey,(err,authData)=>{
    if(err){
        res.send({result:"invalid token"})
    }else{
        res.json(
            {
             message:"Profile Accessed",
             authData   
            }
        )
    }
  })
});

function verifytoken (req,resp,next){
   const BearerHeader = req.header('authorization');
   if (typeof BearerHeader !== 'undefined'){
    const Bearer = BearerHeader.split(" ");
    const token = Bearer[1];
    console.log(token);
    req.token = token;
    next();
    //   resp.send("working")
   }else{
      resp.send({
        result:"Token is not valid"
      })
   }
}
// verifytoken();

app.listen(5000,()=>{
    console.log("running port");
})
