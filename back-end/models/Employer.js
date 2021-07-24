const mongoose=require('mongoose')
const EmployerSchema=mongoose.Schema({
    email:String,
    lastname :String,
    firstname:String,
    password:String,
    companyname:String,
    website:String,
    phone:String,
    selectedFile:String,
})
module.exports=mongoose.model("employer",EmployerSchema)
