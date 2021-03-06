const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PatientSchema = new Schema({
    adhaarNo:{
        type:String, //adhaar number
        require:true
    },
    fname:{
        type:String,
        require:true
    },
    lname:{
        type:String,
        require:true
    },
    contact:{
        patientMobile:{
            type:String,
            require:true
        },
        familyMemberMobile:{
            type:String,
            require:false
        }
    },
    name:{
        type:String,
        require:false,
        default:this.fname+' '+this.lname,
    },
    motherName:{
        type:String,
        require:false,
    },
    fatherName:{
        type:String,
        require:false,
    },
    dateOFBirth:{
        type:String,
        require:false,
    },
    height:{
        type:Number,// in centi-meter
        require:false,
    },
    weight:{
        type:Number, // in kg
        require:false,
    },
    gender:{
        type:String,
        require:true,
    },
    BMI:{
        type:String,
        require:false,
    },
    createdDate:{
        type:Date,
        require:false,
        default:Date.now
    }
});
const PatientModel = mongoose.model('Patient',PatientSchema);
module.exports = PatientModel;