const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientFileSchema = Schema({
    'PatientDocumentId':{
        type:Schema.Types.ObjectId,
        require:true
    },
    'caption':{
        type:String,
        require:false     
    },
    'filePath':{
        type:String,
        require:true
    },
    'CreateDate':{
        type:String,
        default:Date.now
    }
});
const PatientFile = mongoose.model('PatientFile',PatientFileSchema);
module.exports = PatientFile;