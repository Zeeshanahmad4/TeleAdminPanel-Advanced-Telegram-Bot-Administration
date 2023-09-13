const users = [];  // Mock in-memory database for users

exports.register = (req, res) => {
    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).send('User already exists');
    }

    // Save user to mock database
    users.push({ username, password });
    res.status(201).send('User registered successfully');
};

exports.login = (req, res) => {
    const { username, password } = req.body;

    // Check if user exists and password matches
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).send('Invalid credentials');
    }

    // For simplicity, we're not implementing sessions or tokens here
    res.send('Logged in successfully');
};

exports.logout = (req, res) => {
    // In a real-world scenario, we'd end the session or invalidate the user's token
    res.send('Logged out successfully');
};
