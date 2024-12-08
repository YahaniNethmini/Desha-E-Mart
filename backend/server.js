const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Database connection
mongoose
    .connect(
        'mongodb+srv://tynperera:password12345@cluster0.1rkop.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    )
    .then(() => console.log('Connected to database!'))
    .catch((error) => console.error('Database connection error:', error.message));

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173', // No trailing slash
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cache-Control', 'Expires', 'Pragma'],
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
