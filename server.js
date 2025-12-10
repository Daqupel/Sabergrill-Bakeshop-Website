const express = require('express');
const path = require('path'); // Node's built-in path module
const app = express();
const port = 3000;

// Middleware to serve static files (HTML, CSS, JS, images, etc.)
// This line is the key! It tells Express to look in the 'public' directory
// whenever a file is requested.
app.use(express.static(path.join(__dirname, 'public')));

// Set up a route for the homepage (optional, but good practice)
// When a user goes to the root URL '/', Express will automatically look
// for index.html in the 'public' directory and serve it.
app.get('/', (req, res) => {
    // You don't actually need to do anything here if express.static is set up,
    // but you could manually send the file if you preferred:
    // res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
