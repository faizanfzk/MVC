const express=require("express")
const route=express.Router();

const Batch=require("../model/batch.model")

//batch crud
route.get("/",async(req,res)=>{
    try{
    const batches= await Batch.find().populate({
        path:"studentId",
        select:{userId:1}
    }).lean().exec();
    return res.status(200).send(batches);
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports=route