const mongoose = require('mongoose');
const DBSERVERURL = 'mongodb+srv://Sandeep:Sandeep@123@mernstack1db.fvnwp.mongodb.net/test'
const DBLOCALURL = 'mongodb://localhost:27017/ClinicManagement?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
mongoose.connect(DBLOCALURL,{useNewUrlParser:true});
const db = mongoose.connection;

const getConnetion = () =>{
    db.on('error',console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('Connection successfull..');
    });
    return db;
};

module.exports = {getConnetion};