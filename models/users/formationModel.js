const mongoose = require('mongoose');

const jobs = new mongoose.Schema({
   
    title: {
        type: String,
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    location: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    posted: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        required: true
    },
    tags: {
        type: [String],
        required: true
    }
});

const Formation = mongoose.model('Formation', FormationSchema);

module.exports = Formation;

