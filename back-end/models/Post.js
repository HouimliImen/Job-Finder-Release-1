const mongoose = require('mongoose')
const PostSchema = mongoose.Schema({


    owner:{
        type:mongoose.Types.ObjectId,
        ref:"user-auth"
    },
    category:{
        type:mongoose.Types.ObjectId,
        ref:"category"
    },
    title: String,
    city:String,
    description: String,
    company:String,
     created_at: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("post", PostSchema)
