const fs = require('fs');
const path = require('path');

//console.log("path--",path);
// ***************create file *********************
const dirpath = path.join(__dirname,"files");
//console.log("dirpath--",dirpath);
// for(i=0;i<5;i++){
//     fs.writeFileSync(dirpath+"/hello"+i+".txt","Heloo new file created");
// }

//********* read dir all files *************************
// fs.readdir(dirpath,(err,files)=>{
//   files.forEach((item)=>{
//    console.log(item);
//   });
// });

//***********Read single file  ***************/
let filepath = `${dirpath}/hello.txt`;
console.log(filepath);
// fs.readFile(filepath,(err,item)=>{
//    console.log("item--",item);
// });