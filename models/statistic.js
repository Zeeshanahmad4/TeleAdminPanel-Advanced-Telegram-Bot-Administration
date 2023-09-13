const mongoose = require('mongoose');

const statisticSchema = new mongoose.Schema({
    month: {
        type: String,
        required: true
    },
    totalTransactions: Number,
    successfulTransactions: Number,
    failedTransactions: Number
});

module.exports = mongoose.model('Statistic', statisticSchema);
