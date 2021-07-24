const express = require('express');
const app = express();
const Employer=require('../models/Employer')
const router=express.Router()
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
require('dotenv').config()



app.use(express.json());// for parsing application/json

router.post('/', [
        body('email',      "Email must contain a @ and (.) ").isEmail(),
        body('lastname',   "Last name must contain alphabetic letters").isAlpha(),
        body('firstname',  "Firstname must contain alphabetic letters ").isAlpha(),
        body('password',   "Password must contain at least 6 caracter ").isLength({ min: 5 }),
        body('companyname',"Company Name must contain alphabetic letters ").isAlpha(),
        body('website',    "website must contain alphabetic letters ").notEmpty(),
        body('phone',      "Phone must contain a numeric value ").isNumeric(),
],
    (req, res) => {
/////////////////// Test de validation de champs :
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    ////////////////// test email && Creation de new user :

        Employer.find({email:req.body.email})
            .then(employers=> {

                if (employers.length>0){

                    return res.status(400).json({errors:[{msg:"This email address is already in use !"}]})
                }
                else{
                    let newEmployer=new Employer(req.body)
                    bcrypt.genSalt(10, function(err, salt) {
                        bcrypt.hash(req.body.password,salt,(err,hashedPwd)=> {
                            // Store hash in your password DB.
                            newEmployer.password=hashedPwd;
                            newEmployer.save();
                            let payload ={
                                userId:newEmployer._id
                            }
                            jwt.sign(payload,process.env.SECRET_KEY,(err,token)=>{
                                if (err) throw  err
                                res.send({token})
                            });
                        });
                    });
                }
            })
    });
module.exports=router;
