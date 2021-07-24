const mongoose=require('mongoose')
const CategorySchema=mongoose.Schema({
    description : String

})
module.exports=mongoose.model("category",CategorySchema)
