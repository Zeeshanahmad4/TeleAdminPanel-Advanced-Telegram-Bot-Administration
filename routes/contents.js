const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contents');  // Assuming you named your content controller as "contents.js"

// Route to fetch all contents
router.get('/all', contentController.getAllContents);

// Route to fetch specific content by its ID
router.get('/:contentId', contentController.getContentById);

// Route to upload new content
router.post('/upload', contentController.uploadContent);

// Route to update a specific content by its ID
router.put('/update/:contentId', contentController.updateContent);

// Route to delete a specific content by its ID
router.delete('/delete/:contentId', contentController.deleteContent);

module.exports = router;
