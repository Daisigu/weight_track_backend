const mongoose = require('mongoose');

const db = async () => {
    try {
        const connection = await mongoose.connect('mongodb://127.0.0.1:27017/day', {});
        console.log('Connected to MongoDB', connection.connection.host);
    } catch (err) {
        console.log(err)
    }
}
module.exports = db