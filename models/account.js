const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    accountNumber: Number, 
    routingNumber: Number
});

module.exports = mongoose.model('Number', customerSchema);