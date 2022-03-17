const express=require("express")
const route=express.Router();

const Eval=require("../model/evaluation.model")


//evaluation crud
route.get("/evaluations/:id",async(req,res)=>{
    try{
    const evaluations= await Eval.find().populate({
      path:"instructorId",
      select:{firstName:1}
      }).populate({
          path:'batchId',
          select:{batchname:1}

      }).lean().exec();
    return res.status(200).send(evaluations);
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})
module.exports=route