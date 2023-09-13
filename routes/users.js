const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Route for user registration
router.post('/register', usersController.register);

// Route for user login
router.post('/login', usersController.login);

// Route for user logout
router.get('/logout', usersController.logout);

// Route to fetch details of a specific user by their username
router.get('/:username', usersController.getUserDetails);

// Route to update user details
router.put('/update/:userId', usersController.updateUser);

// Route to delete a user account
router.delete('/delete/:userId', usersController.deleteUser);

module.exports = router;
