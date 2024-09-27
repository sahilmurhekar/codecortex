const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Database connection
mongoose.connect('mongodb+srv://gravitastam2024:Sahil%40tam123@cluster0.inn1c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log("DB Connected"))
    .catch(err => console.log("DB not connected", err));

// Middleware
app.use(cors({
    origin: 'https://tam-gravitas-vit.vercel.app',
    credentials: true
}));
app.use(express.json());


// Routes
app.use('/', require('./routes/authroutes'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
