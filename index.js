// const http = require("http");
// const data = require('./data');
// http.createServer((req, res)=>{
//     res.writeHead(200,{'Content-Type':'application\json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(4000);

// const fs = require("fs");
// const input = process.argv;
// if(input[2] == 'add'){
// fs.writeFileSync(input[3],input[4]);
// }else if(input[2] == 'remove'){
//  fs.unlinkSync(input[3]);
// }else{
//     console.log('invalid input');
// }


// const fs = require("fs");
// const path = require('path');
// const dirpath = path.extname(__dirname,"files");
// console.log(dirpath)
// for(i=0;i<5;i++){
//     fs.unlinkSync("apple"+i+".txt","hello");
//     fs.unlinkSync(dirpath+"./apple"+i+".txt","hello");
// }

// fs.readdir(dirpath, (err, files) => {
//     if (err)
//       console.log(err);
//     else {
//       console.log("\nCurrent directory filenames:");
//       files.forEach(file => {
//         console.log(file);
//       })
//     }
// });

// const fs = require("fs");
// const { resolve } = require("path");
// const path = require("path");
// const data = require("./data");
//  const dirname = path.join(__dirname,'crud');
// // const filepath = `${dirname}/banna.txt`;
// console.log(dirname);
// fs.unlinkSync(`${dirname}/mango.txt`,(err)=>{
//  if(!err)console.log("file rename is updated");
// });


// let a = 20;
// let b = 0;

// let writedate =  new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//       resolve(30);
//   },300);
// });
// writedate.then(
//     function(value) {console.log(value+20); },
//     function(error) {  }
//   );


// const { query } = require("express");
// const express = require("express");
// const app = express();

// app.get('', (req, res) => {
//     res.send(`
//      <h1>Homepage</h1><a href='/about'>Go to about page</a>
//      `);
//   });


// app.get('/about' , (req,res) => {
//   res.send(`
//      <input type="text" placeholder="username" value="${req.query.name}" />
//     <button>Click me</button>
//     <h1>About </h1><a href='/'>Go to Homepage page</a>
//   `);
// });

// app.get('/help' , (req,res) => {
//   res.send([
//     {
//     name:'manoj',
//     email:'bhattmanoj@gmail.com'
//   },
//   {
//     name:'mobile',
//     email:'123456890'
//   }
   
//   ]);
// });

// app.listen(4000);

//***************ejs template******************
const express = require('express');
const path = require('path');

const app = express();
const publicpath = path.join(__dirname,'public');

app.set('view engine','ejs');

app.get('/profile',(__,resp)=>{
   const user = {
     name:'manoj',
     city:'mohali jj',
     email:'bhattmanoj97@gmail.com',
     skills:['php','shopify','nodejs','js']
   }
   resp.render('profile',{user});
});


    app.get('/login',(__,resp)=>{
        resp.render('login');
    })

app.get('',(__,resp) => {
   resp.sendFile(`${publicpath}/Homepage.html`);
});
app.get('/help',(__,resp) => {
    resp.sendFile(`${publicpath}/Help.html`);
 })
 app.get('/about',(__,resp) => {
    resp.sendFile(`${publicpath}/about.html`);
 })
 app.get('*',(__,resp) => {
    resp.sendFile(`${publicpath}/404.html`);
 })

app.listen(5000);


//How to make loop in ejs , Make Header File , Show common Heade File 
