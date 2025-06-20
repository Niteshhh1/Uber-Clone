const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
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
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type:String,
            require:true,
            minLength:[3,'color must be 3 length']
        },
        plate:{
            type:String,
            require:true,
            minLength:[3,'color must be 3 length']
        },
        capacity:{
            type:Number,
            require:true,
            min:[1,'must be greater than 1']
        },
        vehicleType:{
            type:String,
            require:true,
            enum:['car','motorcycle','auto']
        },
    },
    location:{
        lat:{
            type:Number
        },
        lng:{
            type:Number
        }
    }
})

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},'uber-video',{expiresIn:'24h'})
    return token;
} 

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password,10);
}

const captainModel = mongoose.model('captain', captainSchema);
module.exports = captainModel;