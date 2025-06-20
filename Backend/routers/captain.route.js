const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller')
const middleware = require('../middlewares/auth.middleware')

router.post('/register',[
    body('email').isEmail().withMessage("Invalid email"),
    body('fullname.firstname').isLength({min:3}).withMessage("firstname must be at least 3 length"),
    body('password').isLength({min:3}).withMessage("password must be atleast 6 length"),
    body('vehicle.color').isLength({min:3}).withMessage("color must be atleast 6 length"),
    body('vehicle.plate').isLength({min:3}).withMessage("plate must be atleast 6 length"),
    body('vehicle.capacity').isInt({min:1}).withMessage("capacity must be atleast 6 length"),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage("Invalid")
],captainController.registerCaptain)

router.post('/login',[
    body('email').isEmail().withMessage("Invalid email"),
    body('password').isLength({min:3}).withMessage("password must be atleast 6 length")
],captainController.loginUser)

router.get('/profile',middleware.authCaptain,captainController.profileCaptain)

router.get('/logout',middleware.authCaptain,captainController.logoutCaptain);

module.exports = router;