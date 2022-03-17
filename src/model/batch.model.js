const mongoose=require("mongoose")

//batch Schema
const batchSchema=new mongoose.Schema({
    batchName:{type:String,required:true},
    studentId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"student",
        required:true
    }]
},
{
timestamps:true,
versionKey:false
}
);
//batch model
const Batch=mongoose.model("batch",batchSchema);

module.exports=Batch;