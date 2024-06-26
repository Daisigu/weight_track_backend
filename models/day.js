const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const daySchema = new Schema({
    date: {
        type: Date,
        required: true,
        unique: true
    },
    weight: {
        type: Number,
        required: true
    },
    isCompleted: {
        type: Boolean,
        required: false,
        default: false
    },
    _id: {
        type: String,
        required: true
    }
});

const Day = mongoose.model('Day', daySchema);

module.exports = Day;
