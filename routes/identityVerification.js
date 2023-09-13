const express = require('express');
const router = express.Router();
const identityVerificationController = require('../controllers/identityVerificationController');

router.post('/submit', identityVerificationController.submitDocument);
router.get('/pending', identityVerificationController.viewPendingVerifications);
router.put('/verify/:documentId', identityVerificationController.verifyDocument);
router.put('/reject/:documentId', identityVerificationController.rejectDocument);

module.exports = router;
