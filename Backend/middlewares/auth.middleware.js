const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user_model')
const blacklistToken = require('../models/blacklist');
const captainModel = require('../models/captain.model');

module.exports.authUser = async (req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token)
    {
        return res.status(401).json({message:"Unauthorized"});
    }

    const isBlacklist = await blacklistToken.findOne({token:token})
    if(isBlacklist)
    {
       return res.status(401).json({message:'Unauthorized'});
    }
    try {
        const decoded = jwt.verify(token,'uber-video');
        const user = await userModel.findById(decoded._id);

        req.user = user;
        return next();

    } catch (error) {
        return res.status(401).json({message:"Unauthorized"});
    }
}

module.exports.authCaptain = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token)
    {
        return res.status(401).json({message:"Unauthorized"});
    }

    const isBlacklist = await blacklistToken.findOne({token:token})
    if(isBlacklist)
    {
       return res.status(401).json({message:'Unauthorized'});
    }

    try {
        const decoded = jwt.verify(token,'uber-video');
        const captain = await captainModel.findById(decoded._id);

        req.captain = captain;
        return next();

    } catch (error) {
        console.log(error)
        return res.status(401).json({message:"Unauthorized"});
    }
}