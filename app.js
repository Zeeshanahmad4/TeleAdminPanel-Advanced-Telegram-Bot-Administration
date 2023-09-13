const express = require('express');
const app = express();

// Middleware for parsing JSON and url-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for serving static files
app.use(express.static('public'));

// Setting up the view engine as EJS
app.set('view engine', 'ejs');

// Import routes
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/users');
const subscriptionRoutes = require('./routes/subscriptions');
// ... other routes will be added here

// Mount routes
app.use('/', indexRoutes);
app.use('/users', userRoutes);
app.use('/subscriptions', subscriptionRoutes);
// ... other route uses will be added here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
