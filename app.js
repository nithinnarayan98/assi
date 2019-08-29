var express=require('express')
const path=require("path")
var app=express();
var bookrouter=require('./routes/bookrouter')
var authorrouter=require('./routes/authorrouter')
app.get("/",function(req,res){
 res.render("index",{pagetitle:"Library",nav:[{link:"/books",title:"books"},{link:"/authors",title:"authors"}]})  
})
app.use("/books",bookrouter)
app.use("/authors",authorrouter)
app.use(express.static(path.join(__dirname,"/public")))
app.set("view engine","ejs")
app.set("views","./src/views")

app.listen(3000,function(req,res){
    console.log("started")
})