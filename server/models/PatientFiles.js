const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientFileSchema = Schema({
    'PatientDocumentId':{
        type:Schema.Types.ObjectId,
        required:true
    },
    'caption':{
        type:String,
        required:false     
    },
    'filePath':{
        type:String,
        required:true
    },
    'CreateDate':{
        type:String,
        default:Date.now
    }
});
const PatientFile = mongoose.model('PatientFile',PatientFileSchema);
module.exports = PatientFile;