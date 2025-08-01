const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sector: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    phonePro: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['startup', 'entreprise', 'association'],
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['candidat', 'company', 'admin'],
        default: 'candidat'
    }
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;