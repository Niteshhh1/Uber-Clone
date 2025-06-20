const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware')


router.post('/register',[
    body('email').isEmail().withMessage("Invalid email"),
    body('fullname.firstname').isLength({min:3}).withMessage("firstname must be at least 3 length"),
    body('password').isLength({min:3}).withMessage("password must be atleast 6 length")
],userController.registerUser)

router.post('/login',[
    body('email').isEmail().withMessage("Invalid email"),
    body('password').isLength({min:3}).withMessage("password must be atleast 6 length")
],userController.loginUser)

router.get('/profile',authMiddleware.authUser,userController.userProfile)

router.get('/logout',authMiddleware.authUser,userController.logOut);

module.exports = router; 