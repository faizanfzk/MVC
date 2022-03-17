const express=require("express")
const route=express.Router();

const Submission=require("../model/submission.model")



route.get("/submissions",async(req,res)=>{
    try {
        const submissions=await Submission.find().populate({
         path:"evaluationId",
        select:{dateOfEvaluation:1}  
        })
        .lean().exec();
        return res.status(200).send(submissions);
    }catch (error) {
        return res.status(500).send(error.message);
    }
})
module.exports=route