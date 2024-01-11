const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

app.use(express.static(path.join(__dirname,"public")));
app.set(path.join(__dirname,"views"));
app.set("view engine","ejs");

app.get("/home",(req,res)=>{
    res.render("index.ejs");
})

app.get("/aboutme",(req,res)=>{
    res.render("about.ejs");
});

app.get("/contactme",(req,res)=>{
    res.render("contact.ejs");
});

app.listen(port,()=>{
    console.log("listening at port : 8080")
})