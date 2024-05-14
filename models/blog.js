const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    sector: {
        type: String,
        require: true
    },
    source: {
        type: String,
        require: true
    },
    date:{
        type: String,
        require: true
    },
    content:{
        type: String,
        require: true
    },
    image:{
        type: String,
        require: true
    }
}, {
    timestamps: true
});

const BlogSchema = mongoose.model('BlogSchema', blogSchema);
module.exports = BlogSchema;