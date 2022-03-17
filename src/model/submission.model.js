const mongoose=require("mongoose");

//submissionSchema
const submissionSchema=new mongoose.Schema({
    evaluationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"evaluation",
        required:true
    },
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"student",
        required:true
    },
    Marks:{type:Number,required:true},
},
{
    timestamps:true,
    versionKey:false
})
//model
const Submission=mongoose.model("submission",submissionSchema)

module.exports=Submission;