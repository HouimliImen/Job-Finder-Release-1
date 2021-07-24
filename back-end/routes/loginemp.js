const express = require('express')
const router = express.Router()
const authMiddleware = require('../helpers/authMiddlewar')
const Employer = require('../models/Employer')
const {body, validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs')
require('dotenv').config()
const jwt = require('jsonwebtoken')

//******LOAD CONNECTED Employer******//
router.get('/', authMiddleware, (req, res) => {
    Employer.findById(req.userId).select("-password -__v")
        .then(employer => {
            if (!employer) {
                return res.status(404).json({msg: "employer not found !"})
            }
            res.status(200).json(employer);
        })
        .catch((err) => {
            console.error((err.message))
            res.status((500).json({errors:[{msg: "Server Error !!!"}]}))
        })
})
//********LOGIN employer********//
/* body juste pour fields validation */
router.post('/',
    [
        //Controle de saisie :
        body('email',    "Invalid email address").notEmpty().isEmail(),
        body('password', "Invalid password !").notEmpty(),

        // body('email', "invalid email ! ").isEmail(),
    ],(req, res) => {
        //*******Test de validation de champs******//
        const errors = validationResult(req); //validation result verified

        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        Employer.findOne({email: req.body.email}) //Illegal erreur ici (find and finOne)
            .then(employer => {
                if (!employer) {
                    console.log(employer) //il faut afficher null dans le console
                    return res.status(404).json({errors: [{msg: "Register before !"}]})
                }
                bcryptjs.compare(req.body.password, employer.password, (err, isMatch)=>{
                    if (err) {
                        throw  err // {console.log("Erreurs",err)}
                    } else if (!isMatch) {
                        return res.status(400).json({errors: [{msg: "Wrong Password !"}]})
                    }else{
                        let payload = {
                            userId: employer._id
                        }
                        jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
                            if (err) throw  err
                            res.send({token})
                        });
                    }



                })
            })
    });
/*});
router.post("/log",(req,res)=> {
console.log("msg : Log")
res.json("you are in log !")*/

//*******Test de validation de champs******//
/*    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    User.find({email: req.body.email})
        .then(user => {
            if (!user.length) {
                return res.status(404)
                    .json({errors: [{msg: "register before!"}]})
            }
            bcryptjs.compare(req.body.password, user.password, (err, isMatch))
            if (err) throw  err
            else if (!isMatch) {
                return res.json({errors: [{msg: "Wrong Password !"}]})
            } else {
                let payload = {
                    userId: user._id
                }
                jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
                    if (err) throw  err
                    res.send({token})
                });
            }


        })
});*/


module.exports = router
