
const mongoose = require('mongoose');
 
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    businessMail: {
        type: String,
        require: true
    },
    companyName: {
        type: String,
        require: true
    },
    contactNumber: {
        type: String,
        require: true
    },
    message:{
        type: String,
        require: true
    }
}, {
    timestamps: true
});

const ContactSchema = mongoose.model('ContactSchema', contactSchema);
module.exports = ContactSchema;