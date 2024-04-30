const express = require('express');
const app = express();


const dayRoutes = require('./routes/day');

const cors = require('cors');

const db = require('./config/db')
app.use(express.json());
app.use(cors());
db()
app.use(dayRoutes);
module.exports = app;
