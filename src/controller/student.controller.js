const express=require("express")
const route=express.Router();


const Student=require("../model/student.model")
route.get("/students",async(req,res)=>{
    try {
        const stds=await Student.find().lean().exec()
        return res.status(200).send(stds)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})


    module.exports=route