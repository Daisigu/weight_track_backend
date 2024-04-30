const mongoose = require('mongoose');
const uri = "mongodb+srv://bogd2288:641004700hahaha@cluster0.raakhvt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const db = async () => {
    try {
        const connection = await mongoose.connect(uri, {});
        console.log('Connected to MongoDB', connection.connection.host);
    } catch (err) {
        console.log(err)
    }
}
module.exports = db