const mongoose = require('mongoose');

const JObsSchema = new mongoose.Schema({
 
    title: {
        type: String,
        required: true
    },
    provider: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    participants: {
        type: Number,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    mode: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        required: true
    },
    certified: {
        type: Boolean,
        required: true
    },
    skills: {
        type: [String],
        required: true
    }
});

const Jobs = mongoose.model('Jobs', JObsSchema);

module.exports = Jobs;

