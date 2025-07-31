/*************  ✨ Windsurf Command ⭐  *************/
const mongoose = require('mongoose');

const FormationAcademiqueSchema = new mongoose.Schema({
    institution: {
        type: String,
        required: true
    },
    nomDiplome: {
        type: String,
        required: true
    },
    domaineDEtude: {
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

const FormationAcademique = mongoose.model('FormationAcademique', FormationAcademiqueSchema);

module.exports = FormationAcademique;

/*******  2239bad6-95eb-4ae7-8610-9f025de32d63  *******/