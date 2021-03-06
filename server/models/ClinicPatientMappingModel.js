const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CPMapping = Schema({
    clinicId:{
        type:Schema.Types.ObjectId,
        required:true
    },
    PatientId:{
        type:Schema.Types.ObjectId,
        required:true
    }
});

const CPModel = mongoose.model('ClinicPatientMapping',CPMapping);
module.exports = CPModel;