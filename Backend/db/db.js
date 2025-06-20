const mongoose = require('mongoose');

function connectToDB(){
    mongoose.connect('mongodb://0.0.0.0/uber-video')
    .then(()=>{
        console.log("connected to database");
    })
    .catch(err => console.error(err));
}

module.exports = connectToDB;