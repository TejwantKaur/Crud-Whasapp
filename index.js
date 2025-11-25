const express = require("express");
const mongoose = require('mongoose');
const path = require("path")

const app = express();
app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs");

main()
  .then(()=> console.log("DB Connected Successfully"))
  .catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whasapp');
}


app.get("/",(req,res)=>{
  res.send("working")
})

app.listen(8000,()=>{
  console.log("App listening at port 8000")
})