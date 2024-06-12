// const express=require("express");
import express from "express"
const app = express();
const port=5143;
app.listen(port,()=>{
    console.log("Server running on Port "+port);
});

app.get("/",(req,res)=>{
    res.send("Hi From Server!");
});
app.get("/logIn",(req,res)=>{
    res.send("You are in LogIn Page.");
})
app.get("/:par",(req,res)=>{
    res.send("You are in Different Page.");
})

