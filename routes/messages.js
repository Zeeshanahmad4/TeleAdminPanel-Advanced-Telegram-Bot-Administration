const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messagesController');

router.get('/', messagesController.viewAllMessages);
router.post('/send', messagesController.sendMessage);
router.delete('/delete/:messageId', messagesController.deleteMessage);

module.exports = router;
