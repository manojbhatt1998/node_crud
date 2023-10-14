const express = require('express');
const EventEmitter = require('events');
const app = express();
const event = new EventEmitter();

let count = 0;
event.on("countApi",()=>{
    count++;
   console.log('hello event called',count);
});


app.get("/",(req,res)=>{
    res.send('api called');
    event.emit('countApi');
});

event.on("searchApi",()=>{
    count++;
    console.log('hello searchApi event called',count);
});

app.get("/search",(req,res)=>{
    res.send('search api called');
    event.emit('searchApi');
});

app.get("/update",(req,res)=>{
   res.send("update api called");
});

app.listen("5000",()=>{
    console.log("Server running 5000");
});
