const express = require('express');
const app = express();


app.get("/", (req,res)=>{
    res.status(200).send("ola mundo!!");
});


app.listen(3000, (req,res) =>{
    console.log("funcionou na porta http://localhost:3000");
});
