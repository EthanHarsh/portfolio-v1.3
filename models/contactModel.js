const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    subject: {
        type: String,
        trim: true,
    },
    message: {
        type: String,
        trim: true,
    },
    time: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;