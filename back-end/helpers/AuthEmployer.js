
const jwt=require('jsonwebtoken')
require('dotenv').config()
const User = require('../models/User')


/*export const authEmployer*/
module.exports=(req,res,next)=>{
    //let token=req.header('auth-token')

    if(User.connectedAs==='Employer') {
        next();
    }
        else
        return res.status(403).json({errors: [{msg: "FORBIDDEN ! "}]})

    }

