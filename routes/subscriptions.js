const express = require('express');
const router = express.Router();
const subscriptionsController = require('../controllers/subscriptionsController');

// Route to fetch all active subscriptions
router.get('/', subscriptionsController.viewAllSubscriptions);

// Route to view details of a specific subscription by its ID
router.get('/:subscriptionId', subscriptionsController.viewSubscriptionById);

// Route to add a new subscription
router.post('/create', subscriptionsController.addSubscription);

// Route to update details of a specific subscription by its ID
router.put('/update/:subscriptionId', subscriptionsController.updateSubscription);

// Route to delete a specific subscription by its ID
router.delete('/delete/:subscriptionId', subscriptionsController.deleteSubscription);

module.exports = router;
