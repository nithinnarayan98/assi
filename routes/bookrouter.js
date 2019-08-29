var express=require('express');
const router=express.Router();
var bookarr=[{
    btitle:"In Search of Lost Time ", 
    genre: "fiction" ,
    author:"by Marcel Proust",
    image:"https://images-na.ssl-images-amazon.com/images/I/51A685AMYoL._SL160_.jpg"
   },
   {
       btitle:"The Hunger Games", 
       genre: "fiction" ,
       author:"by Suzanne Collins" ,
       image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1447303603l/2767052.jpg"
   },
   {
    btitle:"War and Peace ", 
    genre: "history" ,
    author:"Leo Tolstoy ",
    image:"https://images-na.ssl-images-amazon.com/images/I/51J1nb00FLL._SL160_.jpg"
   }]
router.get("/",function(req,res){
    res.render("books",{pagetitle:"Library",nav:[{link:"/books",title:"books"},{link:"/authors",title:"authors"}],bookr:bookarr})  
  
})
router.get("/:id",function(req,res){
    var id=req.params.id
    console.log(id)
    
    res.render("singlebook",{pagetitle:"Library",nav:[{link:"/books",title:"books"},{link:"/authors",title:"authors"}],bookr:bookarr[id]})  
  
})
module.exports=router;