const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

// Schema
const productSchema = new Schema({
    name: String,
    brand: String,
    price: Number,
    quantity: Number,
    discount: String,
    picture: String,
    category: String,
    description: String,
    colours: {
        type: Array,
        default: []
    },
    date: {
        type: String,
        default: Date.now()
    }
});

module.exports = productSchema;