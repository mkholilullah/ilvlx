// server.js
const express = require('express');
const app = express();
const path = require('path');

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Mendefinisikan route untuk path /myroute
app.get('/spot', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'music.html'));
    // res.send('Hello, this is my custom route!');
});

// app.use('/music', express.static('/music'));

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

