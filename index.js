const express = require("express");
const app = express();
const db = require("./config")
app.use(express.json());
 
app.post("/user",(req,res)=>{
    let sno = req.body.sno;
    let name = req.body.name;
    let city = req.body.city;
    let query = (`insert into employ (sno,name,city) values (${sno},"${name}","${city}")`)
    console.log("query is ", query);
    db.query(query,(err,data)=>{
        if(err){
            return res.send("errore",err);
        }else{
            return res.send(data);}
        
    })
    console.log("working");
    
})

app.get("/user1/:sno",(req,res)=>{
    let sno = req.params.sno;

    let query = (`select * from employ where sno = (${sno})`);
    console.log("query is ", query);
    db.query(query,(err,data)=>{
        if(err){
            return res.send(err,"err");
        }else{
            return res.send(data)
        }
    })
})


app.put("/user2",(req,res)=>{
    let name = req.body.name;
    let sno = req.query.sno;

   const query = ( `update employ set name ="${name}" where sno = ${sno}`)

console.log(query);

db.query(query,(err,data)=>{
    if(err){
        return res.send(err,"error")
    }else{
        return res.send(data)
    }
})
})

app.delete("/user3/:sno",(req,res)=>{

    let sno = req.params.sno;

   const query = ( `delete from employ where sno = ${sno}`)

console.log(query);

db.query(query,(err,data)=>{
    if(err){
        return res.send(err,"error")
    }else{
        return res.send(data)
    }
})
})









app.listen(3000,(err) => {
    if(!err){
        console.log("server connected on port 3000");
    }else{
        console.log("server failed");
    }
})