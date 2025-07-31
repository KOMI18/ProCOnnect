const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telephone: {
        type: String,
        required: true
    },
    dateDeNaissance: {
        type: Date,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    biographie: {
        type: String
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

const User = mongoose.model('User', UserSchema);

module.exports = User;
