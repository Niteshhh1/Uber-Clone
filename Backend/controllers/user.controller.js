const userModel = require('../models/user_model');
const userService = require('../services/user.service');
const {validationResult} = require('express-validator');
const blacklistToken = require('../models/blacklist')

module.exports.registerUser = async(req,res,next)=>{
   const errors = validationResult(req)
   if(!errors.isEmpty())
   { return res.status(400).json({errors:errors.array()})}

   console.log(req.body);
   const {fullname, email, password} = req.body;

   const isUserAlready = await userModel.findOne({email});
   if(isUserAlready)
   return res.status(400).json({message:"already h"});

   const hashedPassword = await userModel.hashPassword(password);

   const user = await userService.createUser({
     firstname:fullname.firstname,
     lastname:fullname.lastname,
     email,
     password:hashedPassword
   });

   const token = user.generateAuthToken();
   res.status(201).json({token,user});
}

module.exports.loginUser = async(req,res,next)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty())
  {
    return res.status(400).json({errors:errors.array()})
  }

  const {email,password} = req.body;
  const user = await userModel.findOne({email}).select('+password');

  if(!user)
  {
    return res.status(401).json({message:"Invalid email and password"});
  }

  const isMatch = await user.comparePassword(password);
  if(!isMatch)
  {
    return res.status(401).json({message:"Invalid email or password"});
  }

  const token = user.generateAuthToken();

  res.cookie('token',token);

  res.status(200).json({token,user});
}

module.exports.userProfile = async(req,res,next)=>{
  res.status(200).json(req.user);
}

module.exports.logOut = async(req,res,next)=>{
   const token = req.cookies.token || req.headers.authorization.split(' ')[1];

   await blacklistToken.create({token});
   
   res.clearCookie('token');

   res.status(200).json({message:"logout"});
}