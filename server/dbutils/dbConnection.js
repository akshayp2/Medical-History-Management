const mongoose = require('mongoose');
const DBSERVERURL = 'mongodb+srv://Sandeep:Sandeep123@clinicdb.fuhau.mongodb.net/ClinicDatabase';
const DBLOCALURL = 'mongodb://localhost:27017/ClinicManagement?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
mongoose.connect(DBSERVERURL,{useNewUrlParser:true});
const db = mongoose.connection;

const getConnetion = () =>{
    db.on('error',console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('Connection successfull..');
    });
    return db;
};

module.exports = {getConnetion};