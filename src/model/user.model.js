const mongoose=require("mongoose");
//userSchema

const userSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    gender:{type:String,required:true},
    dateOfBirth:{type:Date,required:true},
    type:{type:String,required:true}
},
{
    versionKey:false,
    timestamps:true
})
//user model
const User=mongoose.model("user",userSchema);

module.exports=User;
