const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const userSchema = new Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    role: {
        type: String,
        default: 'user'
    },
    picture: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    gender: {
        type: String,
        default: ''
    },
    borndate: {
        type: String,
        default: Date.now()
    },
}, {
    timestamps: true
});

module.exports = userSchema;