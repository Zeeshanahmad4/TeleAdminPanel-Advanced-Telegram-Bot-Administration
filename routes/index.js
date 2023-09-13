const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('dashboard');  // Assuming you have a dashboard view
});

module.exports = router;
