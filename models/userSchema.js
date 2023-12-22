const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:String,
})

exports.User = mongoose.model("User",userSchema);