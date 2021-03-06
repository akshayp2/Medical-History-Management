const express = require('express');
const app = express();
const { getConnetion } = require('../dbutils/dbConnection.js');
const PatientModel = require('../models/PatientModel');
console.log('Connection '+getConnetion());
app.use(express.json());

app.get('/insert',async (req,res)=>{
    let patient = new PatientModel({
        adhaarNo:'980243698467',
        fname:'Amit',
        lname:'Vishwakarma',
        contact:{patientMobile:'9594216059'},
        gender:'Male',
    });
    await patient.save();
    res.send(patient);
 });

 app.listen(5000);

