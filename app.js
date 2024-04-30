const express = require('express');
const app = express();


const dayRoutes = require('./routes/day');

const cors = require('cors');

const db = require('./config/db')
app.use(express.json());
app.use(cors());
db()
app.use(dayRoutes);
app.listen(3000, () => console.log('Local app listening on port 3000!'));
