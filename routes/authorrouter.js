var express=require('express');
const router=express.Router();
var authorarr=[{
    btitle:"William Shakespeare", 
    genre: "poet" ,
    author:"William Shakespeare was an English poet, playwright, and actor, widely regarded as the greatest writer in the English language and the world's greatest dramatist.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/220px-Shakespeare.jpg"
   },
   {
       btitle:"George R. R. Martin", 
       genre: "novelist" ,
       author:"George Raymond Richard Martin also known as GRRM, is an American novelist and short story writer in the fantasy, horror, and science fiction genres, screenwriter, and television producer. He is best known for his series of epic fantasy novels, A Song of Ice and Fire, which was adapted into the HBO series Game of Thrones." ,
       image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Portrait_photoshoot_at_Worldcon_75%2C_Helsinki%2C_before_the_Hugo_Awards_%E2%80%93_George_R._R._Martin.jpg/220px-Portrait_photoshoot_at_Worldcon_75%2C_Helsinki%2C_before_the_Hugo_Awards_%E2%80%93_George_R._R._Martin.jpg"
   },
   {
    btitle:"Leo Tolstoy", 
    genre: "russian writer" ,
    author:"Count Lev Nikolayevich Tolstoy, usually referred to in English as Leo Tolstoy, was a Russian writer who is regarded as one of the greatest authors of all time. ",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Tolstoy_Leo_port.jpg/220px-Tolstoy_Leo_port.jpg"
   }]
router.get("/",function(req,res){
    res.render("authors",{pagetitle:"Library",nav:[{link:"/books",title:"books"},{link:"/authors",title:"authors"}],authorr:authorarr})  
  
})
router.get("/:id",function(req,res){
    var id=req.params.id
    console.log(id)
    
    res.render("singleauthor",{pagetitle:"Library",nav:[{link:"/books",title:"books"},{link:"/authors",title:"authors"}],authorr:authorarr[id]})  
  
})
module.exports=router;