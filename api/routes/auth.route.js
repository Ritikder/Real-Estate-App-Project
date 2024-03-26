import express from 'express'
import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs'


const router=express.Router();

router.post('/signup',async(req,res)=>{
    const  {username,email,password}=req.body;
    const hashedPassword=bcryptjs.hashSync(password,10);
    const newUser=new User({username,email,password:hashedPassword})
    try{
    const result=  await newUser.save();
        res.send(result)
    } catch(err){
        res.send(err);
    }
  
});
export default router;