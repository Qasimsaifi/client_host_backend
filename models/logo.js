
const mongoose = require('mongoose');
 
const logoSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    logo: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

const LogoSchema = mongoose.model('LogoSchema', logoSchema);
module.exports = LogoSchema;