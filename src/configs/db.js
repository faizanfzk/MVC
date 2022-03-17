const mongoose=require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb+srv://faizanfzk:faizan123@cluster0.b3q8h.mongodb.net/MVC?retryWrites=true&w=majority")
}
