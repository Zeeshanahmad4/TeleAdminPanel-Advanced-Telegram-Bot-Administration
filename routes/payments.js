const express = require('express');
const router = express.Router();
const paymentsController = require('../controllers/paymentsController');

router.get('/', paymentsController.viewAllPayments);
router.post('/create', paymentsController.createPayment);
router.put('/update/:paymentId', paymentsController.updatePayment);
router.delete('/delete/:paymentId', paymentsController.deletePayment);

module.exports = router;
