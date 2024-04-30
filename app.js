const express = require('express');
const app = express();
const PORT = 3001

const dayRoutes = require('./routes/day');

const cors = require('cors');

const db = require('./config/db')
const Day = require("./models/day");
app.use(express.json());
app.use(cors());
db()
app.use(dayRoutes);
app.listen(PORT, () => console.log(`Local app listening on port ${PORT}!`));
