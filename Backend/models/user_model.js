const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
           type:String,
           require:true,
           minLength:[3,'first name must be at least 3 length']
        },
        lastname:{
          type:String,
          minLength:[3,'last name must be at least 3 length']
        }
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        select:false
    },
    socketId:{
        type:String
    }
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},'uber-video',{expiresIn:'24h'})
    return token;
} 

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password,10);
}

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;

