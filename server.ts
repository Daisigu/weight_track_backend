import mongoose from 'mongoose';
const dayRoutes = require('./routes/day');
const express = require('express');
const cors = require('cors');
const db = require('./config/db')
const app = express();
const PORT = 3001;
app.use(express.json());
app.use(cors());
db()
app.use(dayRoutes);
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})


