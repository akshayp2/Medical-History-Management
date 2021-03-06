const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PatientDocumentSchema = Schema({
    'PatientId':{
        type:Schema.Types.ObjectId,
        required:true
    },
    'name':{
        type:String,
        required:true
    },
    'description':{
        type:String,
        required:false
    },
    'CreateDate':{
        type:String,
        default:Date.now
    }
});

const PatientDocument = mongoose.model('PatientDocument',PatientDocumentSchema);
module.exports = PatientDocument;