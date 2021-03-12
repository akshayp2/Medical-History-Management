const express = require('express');
const app = express();
const { getConnetion } = require('../dbutils/dbConnection.js');
const PatientModel = require('../models/PatientModel');
const PatientDocumentModel = require('../models/PatientDocuments');
const ClinicModel = require('../models/ClinicModel');
const CPModel = require('../models/ClinicPatientMappingModel');
console.log('Connection '+getConnetion());
app.use(express.json());

app.get('/insertPatient',async (req,res)=>{

    let clinic = new ClinicModel({
        name:'clinic',
        Address:'xyz park',
        tel:'9594216059',
        email:'clinic@test.com',
        mobile:'9594206059',
        clinicCode:'1000'
    })
    await clinic.save();

    let patient = new PatientModel({
        adhaarNo:'980243698467',
        fname:'Sandeep',
        lname:'Vishwakarma',
        name:'Sandeep Vishwakarma',// name =  fname + lname
        email:'xyz@test.com',
        contact:{patientMobile:'9594216059'},
        gender:'Male',
    });
    await patient.save();
    res.send(patient);

    let patientDocument = new PatientDocumentModel({
        PatientId:patient._id,
        name:'Blood Group',
        description:'B+'
    });
    await patientDocument.save();

    let ClinicPatientMapping = new CPModel({
        clinicId:clinic._id,
        PatientId:patient._id
    });
    await ClinicPatientMapping.save();
 });

 app.listen(5000);

