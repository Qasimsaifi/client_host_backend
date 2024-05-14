const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Schema.Types.ObjectId, // Use mongoose.Schema.Types.ObjectId
        required: true
    },
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    contactNumber: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    DOB: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    zipCode: {
        type: Number,
        require: true
    },
    education: {
        type: String,
        require: true
    },
    experience: {
        type: String,
        require: true
    },
    field:{
        type: String,
        require: true
    },
    roll: {
        type: String,
        require: true
    },
    currentCTC: {
        type: String,
        require: true
    },
    expectedCTC: {
        type: String,
        require: true
    },
    resume:{
        type: String,
        require: true
    }
},{
    timestamps: true
});

const JobSchema = mongoose.model('JobSchema', jobSchema);
module.exports = JobSchema;