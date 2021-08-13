const express = require('express')
const router = express.Router()
const authMiddleware = require('../helpers/authMiddlewar')
const Categorie=require('../models/Category')
const app=express()



app.use(express.json());

//Add new categorie :
router.post('/',(req,res)=>{
    let newCategorie=new Categorie({...req.body})
    newCategorie.save()
        .then(categorie=>res.status(200).send(categorie))
        .catch((err)=> {
                console.error(err.message)
                res.status(500).send({errors: [{msg: "Server Error"}]})
            }
        )

})


//**Get All categories***//
router.get('/all',(req,res)=>{
    Categorie.find()
        .then(categories=>res.send(categories))
        .catch((err)=>{
            console.error(err.message)
            res.status(500).send({errors:[{msg:"Server Error"}]})

        })
})

/*
router.get('/all',async (req,res)=>{
    try{
        const categories= await Categorie.find()
     res.send(categories)
    }
    catch(err){
        console.error(err.message)
        res.status(500).send({errors:[{msg:"Server Error"}]})
    }
   //finally{}
})
*/


//** Get categorie by id ****//
router.get('/:id',(req,res)=>{
    Categorie.find({_id:req.params.id})

        .then((categorie)=>res.status(200).json(categorie))
        // .send(posts))
        .catch((err)=>{
            // console.error(err.message)
            console.log("Error !!!!!!!!!!!!!!!!!!!!!!!!!")
            res.status(404).send({errors:[{msg:"Server Error"}]})
        })
})

module.exports=router
