const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        enum: ['image', 'video', 'document'],
        required: true
    },
    description: String,
    uploadDate: {
        type: Date,
        default: Date.now
    },
    url: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Content', contentSchema);
