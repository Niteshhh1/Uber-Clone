const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routers/user.route')
const captainRoute = require('./routers/captain.route');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const connectToDB = require('./db/db');

connectToDB();

app.get('/',(req,res)=>{
    res.send("welcome to the jungle");
})

app.listen(3000,()=>{
    console.log('chal yrr');
    
})

app.use('/users',userRoutes);
app.use('/captains',captainRoute);

module.exports = app;