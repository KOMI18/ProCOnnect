/*************  ✨ Windsurf Command ⭐  *************/
const mongoose = require('mongoose');

const ExperienceProSchema = new mongoose.Schema({
    poste: {
        type: String,
        required: true
    },
    entreprise: {
        type: String,
        required: true
    },
    anneeDeDebut: {
        type: Number,
        required: true
    },
    anneeDeFin: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const ExperiencePro = mongoose.model('ExperiencePro', ExperienceProSchema);

module.exports = ExperiencePro;

/*******  2239bad6-95eb-4ae7-8610-9f025de32d63 *******/
