const express = require('express');
const User=require('../models/User')
const router=express.Router()
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
require('dotenv').config()





router.post('/', [
    // username must be an email
    body('firstname',"Firstname must contain alphabetic letters ").isAlpha(),
    body('lastname', "Last name must contain alphabetic letters").isAlpha(),
    body('email',    "Email must contain a @ and (.) ").isEmail(),
    body('phone',    "Phone must contain a numeric value ").isNumeric(),
    body('password', "Password must contain at least 6 caracter ").isLength({ min: 5 }),
],
    async (req, res) => {
        try{
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const users= await User.find({email:req.body.email})
            if (users.length>0){

                return res.status(400).json({errors:[{msg:"This email address is already in use !"}]})
            }
                else{
                    let newUser=new User(req.body)
                    const salt= await bcrypt.genSalt(10)
                    const hash= await bcrypt.hash(req.body.password,salt)
                    newUser.password=hash
                    const savedUser= await newUser.save()
                    let payload ={
                        userId:savedUser._id
                    }
                    const token = await jwt.sign(payload,process.env.SECRET_KEY)
                    res.status(200).send({token})
                   
                }
            }
        catch(err){
            console.log(err)
            res.status(403).json({errors:[{msg:err}]})
        }
/////////////////// Test de validation de champs :
        
        
    ////////////////// test email && Creation de new user :


    });







   /* User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email,
        password:req.body.password

    }).then(user => res.json(user));*/








/*const epress=require('express')
const router=express.Router()
const { body, validationResult } = require('express-validator');


//Register USER:
router.post('/',
        body('firstname').isAlpha,
        body('lastname').isAlpha,
        body('email').isEmail,
        body('phone').isNumeric,
        body('password').isLength({ min: 5 }),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        User.create({
            username: req.body.username,
            password: req.body.password,
        }).then(user => res.json(user));


});*/






module.exports=router;
