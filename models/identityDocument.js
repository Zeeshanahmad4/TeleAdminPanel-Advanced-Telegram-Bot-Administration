const mongoose = require('mongoose');

const identityDocumentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    documentType: {
        type: String,
        enum: ['passport', 'driver_license', 'national_id_card'],
        required: true
    },
    uploadDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'verified', 'rejected'],
        default: 'pending'
    },
    url: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('IdentityDocument', identityDocumentSchema);
