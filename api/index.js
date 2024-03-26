import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect('mongodb://localhost:27017').then(()=>{
    console.log('Connected to mongodb');
}).catch((err)=>{
    console.log(err)
})

const app=express();


app.listen(3000,()=>{
    
    console.log("Server Running on 3000 ");
}) 