const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    sector: {
        type: String,
        require: true
    },
    appearance: {
        type: String,
        require: true
    },
    grade:{
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    image:{
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const ProductSchema = mongoose.model('ProductSchema', productSchema);
module.exports = ProductSchema;