const mongoose = require('mongoose');
const config = require('dotenv').config()
const uri = process.env.MONGO_URI;

const db = async () => {
    try {
        const connection = await mongoose.connect(uri, {});
        console.log('Connected to MongoDB', connection.connection.host);
    } catch (err) {
        console.log(err)
    }
}
module.exports = db