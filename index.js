const { EROFS } = require("constants");
let fs = require("fs");

const data = "hello";
fs.writeFile("./hello.txt",data,(error)=>{
  if(error){
    console.log(error.message);
  }else{
    console.log("hello.txt was created.")
  }

});

fs.readFile("./sample.json","utf-8",(error,data)=>{
  if(error){
    console.log(error.message);
    return;
  }else{
    console.log(data);
  }
});