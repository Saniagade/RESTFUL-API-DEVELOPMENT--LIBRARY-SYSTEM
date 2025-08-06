const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bookRoutes = require('./routes/books');

// Middleware
app.use(express.json());

// Routes
app.use('/books', bookRoutes);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/library')
   
.then(() => {
    console.log("MongoDB Connected");
    app.listen(3000, () => {
        console.log("Server running on http://localhost:3000");
    });
}).catch(err => {
    console.error("Connection failed:", err);
});
