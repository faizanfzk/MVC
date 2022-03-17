const express=require("express")
const connect=require("./configs/db")

const userController=require("./controller/user.controller");
const batchController=require("./controller/batch.controller");
const evalController=require("./controller/evaluation.controller")
const subController=require("./controller/submission.controller")
const stController=require("./controller/student.controller")


const app=express();

app.use(express.json())

app.use("/user",userController)
app.use("/batch",batchController)
app.use("/evaluation",evalController)
app.use("/submission",subController);
app.use("/student",stController)

module.exports=app;


app.listen(5000,async()=>{
    
    try {
         await connect();
    } catch (error) {
        console.log(error);
        
    }
    console.log("Listening at Port 5000")

});
