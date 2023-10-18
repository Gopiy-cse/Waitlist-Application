const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Define a schema for the sign document
const signschema = new schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: Number,
    },
    referal_id: {
        type: String,
        required: true
    },
});

// Create a model for the sign document using the defined schema
const sign = mongoose.model('signmod', signschema);

// Export the sign model
module.exports = sign;
