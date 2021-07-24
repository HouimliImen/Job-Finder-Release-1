const mongoose=require('mongoose')
const UserSchema=mongoose.Schema({
    firstname:String,
    connectedAs:
        {type:String,
         enum: ["Employer","Candidate"]
        },
    lastname:String,
    phone:Number,
    email:String,
    password:String,
    datebirth: {
        "type": "date",
    }   ,
    companyname:String,
    website:String,
    selectedFile:String,
   // governorate:String
})
module.exports=mongoose.model("user-auth",UserSchema)
