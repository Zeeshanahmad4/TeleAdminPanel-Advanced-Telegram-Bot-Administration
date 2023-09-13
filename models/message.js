const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    submissionDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'responded', 'archived'],
        default: 'pending'
    },
    response: {
        type: String
    },
    responseDate: Date
});

module.exports = mongoose.model('Message', messageSchema);
