const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Define a schema for the form document
const formschema = new schema({
    username: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String
    }
});

// Create a model for the form document using the defined schema
const form = mongoose.model('Formdata', formschema);

// Export the form model
module.exports = form;
