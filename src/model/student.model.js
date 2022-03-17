const mongoose=require("mongoose")

//student schema
const studentSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    rollid:{type:String,required:true,unique:true},
    currentBatch:{type:String,required:true}
},
{
    timestamps:true,
    versionKey:false
    
}

);

const Student=mongoose.model("student",studentSchema)

module.exports=Student;