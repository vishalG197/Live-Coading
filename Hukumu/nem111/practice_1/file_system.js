const fs = require('fs');
const path = require("path");

const operations = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];


switch(operations){
   case "create":{
      try {
   
      fs.writeFileSync(file,content,"utf-8");
      console.log(`file'${file}' created successfully`)
      } catch (error) {
         console.log(`error in creating file: ${error.message}`)
      }
      return;
   }
   case "append" :{
      try {
         fs.appendFileSync(`${file}`,`\n ${content}`);
         console.log("content appended to the file")
      } catch (error) {
         console.log(`error in creating file: ${error.message}`)
      }
      return;
   }
   case "rename" :{
      try {
         fs.renameSync(`${file}`,content);
         console.log("file rename succeeded")
      } catch (error) {
         console.log(`error in creating file: ${error.message}`)
      }
      return;
   }
   case "read" :{
      try {
         // setHeader("Content-Type", "application/json"); 
         const data =fs.readFileSync(`${file}`,"utf-8");
         console.log(data.todo)
      } catch (error) {
         console.log(`error in creating file: ${error.message}`)
      }
      return;
   }
   case "list" :{
      try {
         const files =fs.readdirSync(file);
         console.log("list of files:");
         files.forEach((file)=>{console.log(file)})
      } catch (error) {
         console.log(`error in creating file: ${error.message}`)
      }
      return;
   }
   case "delete" :{
      try {
         fs.unlinkSync(file);
         console.log("file deleted successfully");
         
      } catch (error) {
         console.log(`error in creating file: ${error.message}`)
      }
      return;
   }
   return;
}