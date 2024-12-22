// //Install express server
// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static('./dist/angular-frontend'));

// app.get('/*', (req, res) =>
//     res.sendFile('index.html', {root: 'dist/angular-frontend/'}),
// );

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);

// Install necessary modules
const express = require('express');
const path = require('path');
const cors = require('cors'); // Import CORS middleware

const app = express();

// Enable CORS for your frontend URL (adjust if necessary)
const corsOptions = {
    origin: 'https://mernui.onrender.com', // Frontend URL for Angular
    methods: 'GET,POST,PUT,DELETE', // Allow these methods
    allowedHeaders: 'Content-Type', // Allow these headers
};

// Use CORS middleware
app.use(cors(corsOptions));

// Serve only the static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist/angular-frontend')));

// Route all requests to index.html (Angular's routing needs this)
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/angular-frontend', 'index.html'));
});

// Start the app by listening on the default Render port (or 8080 locally)
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
