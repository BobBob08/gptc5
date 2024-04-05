const mongoose = require("mongoose")
const { model } = require("mongoose")

mongoose.connect("mongodb+srv://ceyabobby:bobbob807575@cluster0.puiuhjb.mongodb.net/gptc_mern?retryWrites=true&w=majority&appName=Cluster0") 
.then(()=>{
    console.log("DB connected")
})
.catch(err=>console.log(err))

let mongoSchema = mongoose.Schema 

const EmployeeSchema = new mongoSchema({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number
})

var employeeModel = mongoose.model("employee",EmployeeSchema)
module.exports = employeeModel