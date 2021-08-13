
const jwt=require('jsonwebtoken')
require('dotenv').config()
const User = require('../models/User')


/*export const authEmployer*/
module.exports=async(req,res,next)=>{
    //let token=req.header('auth-token')
    try{
        const id=req.userId
        const user= await User.findById(id)
        if(user.connectedAs==='Employer')
         next()
         else{
             res.status(401).json({errors:[{msg:"unauthorized action"}]})
         }
    }
    catch(err){
        res.status(500).json({errors:[{msg:"server error"}]})
    }

    }

