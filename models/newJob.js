const mongoose = require('mongoose');

const newJobSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        require: true,
    },
    time: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    detail: {
        type: String,
        require: true
    }
},{
    timestamps: true
});

const NewJobSchema = mongoose.model('NewJobSchema', newJobSchema);
module.exports = NewJobSchema;