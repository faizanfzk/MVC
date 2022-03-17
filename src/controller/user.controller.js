const express=require("express")
const route=express.Router();

const User=require("../model/user.model")
route.get("/",async(req,res)=>{
    try {
        const users=await User.find().lean().exec()
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})
module.exports=route;
