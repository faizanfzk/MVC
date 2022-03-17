const mongoose=require("mongoose");

//evaluation schema

const evaluationSchema=new mongoose.Schema({
    dateOfEvaluation:{type:Date,required:true},
    instructorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    batchId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
})

const Eval=mongoose.model("evaluation",evaluationSchema)

module.exports=Eval;