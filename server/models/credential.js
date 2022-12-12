const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const credentialSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
}, {
    timestamps: true
});

module.exports = credentialSchema;