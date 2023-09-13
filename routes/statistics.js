const express = require('express');
const router = express.Router();
const statisticsController = require('../controllers/statisticsController');

router.get('/', statisticsController.viewAllStatistics);
router.get('/monthly', statisticsController.viewMonthlyStatistics);

module.exports = router;
