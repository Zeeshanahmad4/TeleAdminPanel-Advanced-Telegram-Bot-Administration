const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {  // In a real-world scenario, remember to hash this!
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dateJoined: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
});

module.exports = mongoose.model('User', userSchema);
