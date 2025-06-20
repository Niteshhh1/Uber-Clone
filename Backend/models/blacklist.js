const mongoose = require('mongoose');

const blacklistToken = new mongoose.Schema({
    token:{
        require:true,
        type:String,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:86400
    }
})

module.exports = mongoose.model('blacklistToken', blacklistToken)